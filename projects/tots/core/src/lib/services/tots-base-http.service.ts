import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TotsCoreConfig, TOTS_CORE_PROVIDER } from '../entities/tots-core-config';
import { Observable } from 'rxjs';
import { TotsQuery } from '../entities/tots-query';
import { TotsListResponse } from '../entities/tots-list-response';

@Injectable({
    providedIn: 'root'
})
export class TotsBaseHttpService<T> {
    /**
     *
     */
    basePathUrl = '';

    constructor(
        @Inject(TOTS_CORE_PROVIDER) protected config: TotsCoreConfig,
        protected http: HttpClient
    ) {

    }

    create(item: T): Observable<T> {
        return this.http.post<T>(this.config.baseUrl + this.basePathUrl, item);
    }

    fetchById(itemId: number|string): Observable<T> {
        return this.http.get<T>(this.config.baseUrl + this.basePathUrl + '/' + itemId);
    }

    update(item: T): Observable<T> {
        return this.http.put<T>(this.config.baseUrl + this.basePathUrl + '/' + (item as any).id, item);
    }

    list(query: TotsQuery): Observable<TotsListResponse<T>> {
        return this.http.get<TotsListResponse<T>>(this.config.baseUrl + this.basePathUrl + '?' + query.toString());
    }

    removeById(itemId: number|string): Observable<{deletes: Array<number>}> {
        return this.http.delete<{deletes: Array<number>}>(this.config.baseUrl + this.basePathUrl + '/' + itemId);
    }

    updateInBulk(items: Array<T>): Observable<{items: Array<T>}> {
        return this.http.put<{items: Array<T>}>(this.config.baseUrl + this.basePathUrl, { items: items });
    }

    removeInBulk(ids: Array<number>): Observable<{deletes: Array<number>}> {
        return this.http.delete<{deletes: Array<number>}>(this.config.baseUrl + this.basePathUrl + '?ids=' + ids);
    }
}
