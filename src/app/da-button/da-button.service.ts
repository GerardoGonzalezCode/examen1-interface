import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../message';

@Injectable({
    providedIn:'root'
})

export class DaButtonService {
    constructor(private http:HttpClient) {
        console.log("Servicio Iniciado");
    }

    addText(messageM:Message):Observable<Object>{
        console.log(messageM);
        return this.http.post('https://tone-analyzer-19-ep1.mybluemix.net/sentiment',messageM)
    }

}
