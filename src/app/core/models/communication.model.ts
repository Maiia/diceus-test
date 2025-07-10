export interface IMessage {
    id: string;
    title: string;
    sender: string;
    date: string;
    content: string;
    attachments: number;
    status: 'new' | 'responded' | 'none';
}
