import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, take} from "rxjs";
import {Page} from "../../components/Page";

@Injectable({
    providedIn: 'root'
})
export class RestService<T extends { id?: string | number }> {

    constructor(
        protected _http: HttpClient,
        @Inject(String) private _endpoint: string) {
    }

    getAll(queryOptions?: any): Observable<Page<T>> {
        return this.getPage();
    }

    getPage(page: number = 0): Observable<Page<T>> {
        let params = new HttpParams();

        if (page > 0) {
            params = params.set('page', page);
        }

        return this._http.get<Page<T>>(this._endpoint, {params})
            .pipe(take(1));
    }

    loadById(id: number | string): Observable<T> {
        const url = `${this._endpoint}/${id}`;
        return this._http.get<T>(url)
            .pipe(take(1));
    }

    private create(entity: T): Observable<T> {
        return this._http.post<T>(this._endpoint, entity)
            .pipe(take(1));
    }

    private update(entity: T): Observable<T> {
        return this._http.put<T>(this._endpoint, entity)
            .pipe(take(1));
    }

    save(entity: T): Observable<T> {
        if (entity.id) {
            return this.update(entity);
        }
        return this.create(entity);
    }

    remove(id: number): Observable<T> {
        return this._http.delete<T>(`${this._endpoint}/${id}`)
            .pipe(take(1));
    }
}
