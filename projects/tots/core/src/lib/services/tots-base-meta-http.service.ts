import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TotsQuery } from '../entities/tots-query';
import { TotsListResponse } from '../entities/tots-list-response';
import { TotsBaseHttpService } from './tots-base-http.service';
import { TotsMetaListResponse } from '../entities/tots-meta-list-response';

@Injectable({
    providedIn: 'root'
})
export class TotsBaseMetaHttpService<T> extends TotsBaseHttpService<T> {

    override list(query: TotsQuery): Observable<TotsListResponse<T>> {
        return super.http.get<TotsMetaListResponse<T>>(this.config.baseUrl + this.basePathUrl + '?' + query.toString())
        .pipe(
          map((response: TotsMetaListResponse<T>) => {
            return {
              current_page: response.meta?.current_page || 0,
              first_page_url: '',
              from: (response.meta?.from || 0) + '',
              last_page: response.meta?.last_page || 0,
              path: response.meta?.path || '',
              per_page: response.meta?.per_page || 0,
              to: (response.meta?.to || 0) + '',
              total: response.meta?.total || 0,
              data: response.data,
              last_page_url: '',
              next_page_url: '',
              prev_page_url: ''
            } as TotsListResponse<T>;
          })
        );
    }

}
