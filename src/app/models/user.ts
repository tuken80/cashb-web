import {Mail} from "./mail";

export class User {
  id: string;
  prenom: string;
  nom: string;
  dateNaissance: Date;
  adresse: string;
  codePostal: bigint;
  ville: string;

  mail: Mail;
}
