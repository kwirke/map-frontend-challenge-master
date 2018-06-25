import { EFieldStatus } from "./field";
import * as R from 'ramda';

export const UPDATE_FIELD = 'UPDATE_FIELD';
export const BLUR_FIELD = 'BLUR_FIELD';
export const START_CREATING_JOB = 'START_CREATING_JOB';
export const FINISH_CREATING_JOB = 'FINISH_CREATING_JOB';

export const updateField = (fieldName: string, value?: any, status?: EFieldStatus | null) => ({
    type: UPDATE_FIELD,
    fieldName,
    ...(R.isNil(value) ? {} : {value}),
    ...(R.isNil(status) ? {} : {status}),
});

export const blurField = (fieldName: string) => ({
    type: BLUR_FIELD,
    fieldName,
})

export const startCreatingJob = () => ({
    type: START_CREATING_JOB,
});

export const finishCreatingJob = () => ({
    type: FINISH_CREATING_JOB,
});
