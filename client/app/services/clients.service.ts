import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

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

    registerService(client): Observable<MessageRegister> {

        if(client._id){
            return this.http.put(this.url + '/' + client._id, JSON.stringify(client), {headers: this.headers})
            .map(() => new MessageRegister('Cliente alterado com sucesso!', false));
        }else {
            return this.http.post(this.url, JSON.stringify(client), {headers: this.headers})
            .map(() => new MessageRegister('Cliente salvo com sucesso!', true));
        }

    }

    remove(client) {
        return this.http.delete(this.url + '/' + client._id);
    }

    searchForId(id: string) {
        return this.http.get(this.url + '/' + id).map(res => res.json());
    }
}

export class MessageRegister {

    constructor(private _message: string, private _include: boolean) {
        this._message = _message;
        this._include = _include;
    }

    get message(): string {
        return this._message;
    }

    get include(): boolean {
        return this._include;
    } 
}