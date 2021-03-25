import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from "@angular/common/http";

import { Observable } from 'rxjs';

import { Actualite } from '../../models/actualite';

import {environment} from "../../../environments/environment";


@Injectable({ providedIn: 'root' })
export class ActualiteProvider {
    private readonly path;

    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient) {
        this.path = `${environment.api}/actualite`;
    }


    add(a: Actualite): Observable<Actualite> {
        return this.http.post<Actualite>(this.path, a, this.httpOptions);
    }

}
