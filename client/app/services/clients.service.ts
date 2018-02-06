import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ClientsService {

    http: Http;
    headers: Headers;
    url: string ='v1/data';

    constructor(http: Http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-type', 'application/json');
    }

    list(){
        return this.http.get(this.url)
            .map(res => res.json());
    }

    registerService(client){
        return this.http.post(this.url, JSON.stringify(client), {headers: this.headers});
    }
}