import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  get(apiUrl: string) {
    let observable: any = this.http.get(apiUrl);
    /**
         observable.pipe(map((data: any) => {
                //tratamiento adicional al response
            })) 
         */
    return observable;
  }

  post(apiUrl: string, request:any) {
    let observable: any = this.http.post(apiUrl, request);
    return observable;
  }

  put(apiUrl: string, request:any) {
    let observable: any = this.http.put(apiUrl, request);
    return observable;
  }

  delete(apiUrl: string) {
    let observable: any = this.http.delete(apiUrl);
    return observable;
  }
}
