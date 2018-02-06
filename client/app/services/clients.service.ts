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

        if(client._id){
            return this.http.put(this.url + '/' + client._id, JSON.stringify(client), {headers: this.headers});
        }else {
            return this.http.post(this.url, JSON.stringify(client), {headers: this.headers});
        }

    }

    remove(client) {
        return this.http.delete(this.url + '/' + client._id);
    }

    searchForId(id: string) {
        return this.http.get(this.url + '/' + id).map(res => res.json());
    }
}