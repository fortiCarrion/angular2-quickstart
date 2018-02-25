import {Component, OnInit} from '@angular/core';

import {Contato} from './contato.model';
import {ContatoService} from './contato.service';


@Component({
    moduleId: module.id,
    selector: 'contatos-lista',
    templateUrl: 'contatos-lista.component.html',

})
export class ContatosListaComponent implements OnInit{
    contatos: Contato[];

    //usamos o construtor apenas para inicializacoes mais simples
    constructor(private contatoService: ContatoService){}

    //implementando um ciclo de vida
    ngOnInit():void{
        this.contatoService.getContatos()
            .then((contatos: Contato[]) => {
                this.contatos = contatos;
            }).catch(err => console.log(err))
    }
}