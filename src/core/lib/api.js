import axios from 'axios';
import * as R from 'ramda';
import { host } from './constants';

export const getSymbols = () => axios.get(`${host}/api/binance/symbols`).then(R.propOr([], 'data'));

export const createParseRequest = params => axios.post(`${host}/api/binance/parse`, { ...params }).then(R.propOr({}, 'data'));
