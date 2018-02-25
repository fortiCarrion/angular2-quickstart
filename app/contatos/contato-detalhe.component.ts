import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';

import { Contato } from './contato.model';
import { ContatoService } from './contato.service'

@Component({
    moduleId: module.id,
    selector:'contato-detalhe',
    templateUrl: 'contato-detalhe.component.html',
    styles:[`
        .ng-valid[required] {
            border: 2px solid green;
        }
        .ng-invalid:not(form){
            border: 2px solid red;
        }
    `]
})
export class ContatoDetalheComponent implements OnInit{

    contato: Contato;

    constructor(
        private contatoService: ContatoService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    ngOnInit(): void{
        this.contato = new Contato(0,'','','');
        //params: retorna um observabel que contem no parametro da nossa rota
        this.route.params.forEach((params: Params) => {
            //+: converte para um numero a string
            let id: number = +params['id'];

            if(id){
                this.contatoService.getContato(id)
                .then((contato: Contato) => {
                    this.contato = contato;
                });
            }
            
        });
    }
} 