import {User} from "./user";
import {Contact} from "./contact";

export class Mail {
  id: string;
  value: string;
  enableNewsletter: boolean;

  user: User;
  demandesContact: Contact[] = [];

  constructor(value: string, enableNewsletter: boolean) {
    this.value = value;
    this.enableNewsletter = enableNewsletter;
  }
}
