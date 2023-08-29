import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, take} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RestService<T extends { id?: string | number }> {

  constructor(
    protected _http: HttpClient,
    @Inject(String) private _endpoint: string) {
  }

  search(queryOptions?: any): Observable<any> {
    return this._http.get(this._endpoint)
      .pipe(take(1));
  }

  loadById(id: number | string) {
    const url = `${this._endpoint}/${id}`;
    return this._http.get<T>(url)
      .pipe(take(1));
  }

  private create(entity: T) {
    return this._http.post(this._endpoint, entity)
      .pipe(take(1));
  }

  private update(entity: T) {
    return this._http.put(this._endpoint, entity)
      .pipe(take(1));
  }

  save(entity: T) {
    if (entity.id) {
      return this.update(entity);
    }
    return this.create(entity);
  }

  remove(id: number) {
    return this._http.delete(`${this._endpoint}/${id}`)
      .pipe(take(1));
  }
}
