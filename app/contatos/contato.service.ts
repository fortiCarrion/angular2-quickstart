import {Injectable} from '@angular/core';

import {Contato} from './contato.model';
import {CONTATOS} from './contatos-mock';

//emite meta-dados para o angular2, para identificar outras dependencias e fazer as insercoes das dependencias de forma correta
@Injectable()
export class ContatoService{
    getContatos(): Contato[]{
        return CONTATOS;
    }
}