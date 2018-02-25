import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';

import { Contato } from './contato.model';
import { ContatoService } from './contato.service'

@Component({
    moduleId: module.id,
    selector:'contato-detalhe',
    templateUrl: 'contato-detalhe.component.html'
})
export class ContatoDetalheComponent implements OnInit{

    constructor(
        private contatoService: ContatoService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    ngOnInit(): void{
        console.log("on init");
        //params: retorna um observabel que contem no parametro da nossa rota
        this.route.params.forEach((params: Params) => {
            //+: converte para um numero a string
            let id: number = +params['id'];
            console.log(id);

            this.contatoService.getContato(id)
                .then((contato: Contato) => {
                    console.log(contato);
                });
        });
    }
} 