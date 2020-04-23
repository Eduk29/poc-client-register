import { Document } from './document.model';
    

export interface DocumentType {
    key: string;
    documents: Array<Document>;
    id: number;
    value: string;
}
