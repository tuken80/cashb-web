import {User} from "./user";

export class Comment {
  id: string;
  author: User;
  contenu: string;
  date: Date;

  constructor(contenu: string) {
    this.contenu = contenu;
  }
}
