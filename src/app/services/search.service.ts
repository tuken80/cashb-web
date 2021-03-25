import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {Observable} from 'rxjs';


import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SearchService {
    private apiPath: string;

    constructor(
        private http: HttpClient) {
        this.apiPath = `${environment.api}`;
    }

    launch(val: string): Observable<any[][]> {
        const params = new HttpParams().set('search', val);

        return this.http.get<any[][]>(`${this.apiPath}/search`, {params});
    }
}
