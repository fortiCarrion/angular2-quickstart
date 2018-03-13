import {Injectable} from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Contato} from './contato.model';
import {CONTATOS} from './contatos-mock';

//emite meta-dados para o angular2, para identificar outras dependencias e fazer as insercoes das dependencias de forma correta
@Injectable()
export class ContatoService{

    private apiUrl: string = 'app/contatos';
    private headers: Headers = new Headers({'Content-Type': 'application/json'});

    constructor(
        private http: Http)
    {}
    
    getContatos(): Promise<Contato[]>{
        return this.http.get(this.apiUrl)    
            //converter observable para uma promise
            .toPromise()
            .then(response => response.json().data as Contato[])
            .catch(this.handleError);
        //return Promise.resolve(CONTATOS);
    }

    getContato(id: number): Promise<Contato>{
        return this.getContatos()
            .then((contatos: Contato[]) => {
                return contatos.find((contato) =>{
                    return contato.id === id;
                });
            });
    }

    create(contato: Contato): Promise<Contato>{
        //1. qual url que vamos mandar o post
        //2. quais os detalhes do contato que vamos adicionar
        //3. cabeçalhos que vamos adicionar para requisição
        return this.http
        .post(this.apiUrl, JSON.stringify(contato), {headers: this.headers})
        .toPromise()
        .then((response: Response) => response.json().data as Contato)
        .catch(this.handleError)
    }

    update(contato: Contato): Promise<Contato>{
        const url = `${this.apiUrl}/${contato.id}`; //app/contatos/:id
        return this.http
        .put(url, JSON.stringify(contato), {headers: this.headers})
        .toPromise()
        .then(() => contato as Contato)
        .catch(this.handleError);
    }

    delete(contato: Contato): Promise<Contato>{
        const url = `${this.apiUrl}/${contato.id}`; //app/contatos/:id
        return this.http
        .delete(url, {headers: this.headers})
        .toPromise()
        .then(() => contato as Contato)
        .catch(this.handleError);
    }

    private handleError(err: any): Promise<any>{
        console.log('Error', err)
        return Promise.reject(err.message || err);
    }

    getContatosSlowly(): Promise<Contato[]>{
        return new Promise((resolve, reject) =>{
            setTimeout(resolve, 3000);
        }).then(() => this.getContatos());
    }
}