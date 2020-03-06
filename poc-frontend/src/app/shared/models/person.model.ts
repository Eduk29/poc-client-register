import { Address } from "./address.model";
import { Contact } from "./contact.model";
import { Document } from "./document.model";

export interface Person {
    contacts: Contact[],
    birthdate: Date,
    documents: Document[],
    address: Address[],
    gender: String,
    id: Number,
    name: String
}
