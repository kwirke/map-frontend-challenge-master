import {combineReducers} from 'redux';
import { jobFormReducer } from '../components/JobForm/redux/jobFormReducer';
import { mapReducer } from '../components/Map/redux/mapReducer';
import ToastReducer from '../components/Toast/redux/ToastReducer';

export type TAction = {
    [key: string]: any;
    type: string;
};

export type TReducer<T> = (state: T | undefined, action: TAction) => T;

export const appReducer = combineReducers({
    jobForm: jobFormReducer,
    map: mapReducer,
    toast: ToastReducer,
});
