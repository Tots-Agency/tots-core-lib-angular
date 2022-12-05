import { Injectable } from '@angular/core';
import { Observable, of, Subject, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TotsCacheInMemory {

    cache: any = {};

    run<T>(key: string, obs: Observable<T>): Observable<T> {
        let inCache = this.cache[key];

        if(inCache != undefined){
            return of(inCache);
        }

        return obs.pipe(tap(res => this.cache[key] = res));
    }

    removeByKey(key: string) {
        this.cache[key] = undefined;
    }

    clear() {
        this.cache = {};
    }
}