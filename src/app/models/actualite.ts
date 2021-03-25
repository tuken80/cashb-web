import {Mail} from "./mail";

export class Actualite {
  id: string;
  titre: string;
  description: string;
  contenu: string;
  date: Date;

  constructor(titre: string, description: string, contenu: string, date: Date) {
    this.titre = titre;
    this.description = description;
    this.contenu = contenu;
    this.date = date;
  }
}
