export const enum ResStatus {
    Success = 'success',
    Fail = 'fail',
    Error = 'error'
}

export interface ResJSON {
    status: ResStatus;
    message: string;
    body?: Array;
}
