import { Person } from './person.model';
import { ContactType } from './contact-type.model';
export interface Contact {
  id: number;
  person: Person;
  contactType: ContactType;
  isPrincipal: boolean;
  value: string;
}
