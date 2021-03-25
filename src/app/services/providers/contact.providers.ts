import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from "@angular/common/http";

import { Observable } from 'rxjs';

import { Contact } from '../../models/contact';

import {environment} from "../../../environments/environment";

@Injectable({ providedIn: 'root' })
export class ContactProvider {
    private readonly path;

    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient) {
        this.path = `${environment.api}/contact`;
    }


    add(c: Contact): Observable<Contact> {
      return this.http.post<Contact>(this.path, c, this.httpOptions);
    }

    edit(c: Contact): Observable<Contact> {
        return this.http.put<Contact>(this.path, c, this.httpOptions);
    }
}
