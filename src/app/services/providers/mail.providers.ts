import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from "@angular/common/http";

import { Observable } from 'rxjs';

import { Mail } from '../../models/mail';

import {environment} from "../../../environments/environment";


@Injectable({ providedIn: 'root' })
export class MailProvider {
    private readonly path;

    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient) {
        this.path = `${environment.api}/mail`;
    }


    add(m: Mail): Observable<Mail> {
      return this.http.post<Mail>(this.path, m, this.httpOptions);
    }

    edit(m: Mail): Observable<Mail> {
        return this.http.put<Mail>(this.path, m, this.httpOptions);
    }
}
