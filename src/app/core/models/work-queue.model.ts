export interface IWorkQueueItem {
    originator: IOriginator;
    client: string;
    line: string;
    type: string;
    status: string;
    created: string;
    originatorAvatar: string | null;
}

export interface IOriginator {
    name: string;
    surname: string;
}
