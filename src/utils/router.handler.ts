
export function successHandler(resp: any, data: any, message: any) {
    resp.json({data, message});
}

export function errorHandler(next: any, message: any) {
    next({message});
}