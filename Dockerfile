# building the application in one container
FROM node:alpine as build

RUN npm install node-sass@latest

RUN apk add python make gcc g++

WORKDIR /app
COPY package*.json /app/

RUN npm install

COPY ./ /app/

RUN npm run build

FROM nginx:1.9.2

RUN mkdir -p /data/www

# Install supervisor and clean
RUN apt-get -y update && \
    apt-get -y install supervisor && \
    apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Replace default config
COPY --from=build /app/build/ /data/www
COPY --from=build /app/nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/nginx/default_app.conf /etc/nginx/conf.d/default.conf

VOLUME ["/etc/nginx/conf.d", "/data/www"]
EXPOSE 80

CMD ["nginx"]