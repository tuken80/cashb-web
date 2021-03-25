import {Mail} from "./mail";
import {Telephone} from "./telephone";

export class Contact {
  id: string;
  sujet: string;
  details: string;
  mail: Mail;
  telephone: Telephone;

  constructor(sujet: string, details: string, mail: Mail, telephone: Telephone) {
    this.sujet = sujet;
    this.details = details;
    this.mail = mail;
    this.telephone = telephone;
  }
}
