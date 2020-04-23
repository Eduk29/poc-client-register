import { Contact } from "./contact.model";

export interface ContactType {
    key: string;
    contacts: Contact;
    id: number;
    value: string;
}
