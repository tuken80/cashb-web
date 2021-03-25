import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from "@angular/common/http";

import { Observable } from 'rxjs';

import { Musique } from '../../models/musique';

import {environment} from "../../../environments/environment";

@Injectable({ providedIn: 'root' })
export class MusiqueProvider {
    private readonly path;

    constructor(
        private http: HttpClient) {
        this.path = `${environment.api}/musique`;
    }

    gets(): Observable<Musique[]> {
      return this.http.get<Musique[]>(`${this.path}s`);
    }
}
