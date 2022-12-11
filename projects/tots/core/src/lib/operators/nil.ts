import { Observable } from "rxjs";

export function nil<T>(){
    return (observable: Observable<T>) => new Observable<T>(
        subscriber => {
            observable.subscribe({
                next(value) {
                    if(value !== undefined && value !== null) {
                        subscriber.next(value);
                    }
                },
                error(err) {
                    subscriber.error(err);
                },
                complete() {
                    subscriber.complete();
                  }
            });
        }
    );
};