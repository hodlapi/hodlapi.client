import axios from 'axios';
import * as R from 'ramda';
import { host } from './constants';

export const getCurrencyPairs = () => axios.get(`${host}/api/currencyPairs`).then(R.propOr([], 'data'));

export const getDataSources = () => axios.get(`${host}/api/dataSources`).then(R.propOr([], 'data'));

export const createParseRequest = params => axios.post(`${host}/api/request`, {...params }).then(R.propOr({}, 'data'));