import { DocumentType } from './document-type.model';

export interface Document {
    id: number;
    idPerson: number;
    documentType: DocumentType;
    documentValue: string;
}
