export interface HistoryMonitor {
    details: {
        responseTimeMs: number,
        httpStatusCode: number
    },
    _id: string,
    site: {
        _id: string,
        name: string,
        url: string
    },
    status: string,
    responseTimeMs: number,
   createdAt:string,
   __v: number
}