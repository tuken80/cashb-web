import {User} from "./user";
import {Contact} from "./contact";

export class Telephone {
  id: string;
  value: string;

  user: User;
  demandesContact: Contact[] = [];

  constructor(value: string) {
    this.value = value;
  }
}
