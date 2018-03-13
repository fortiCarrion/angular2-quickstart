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

    contato: Contato;
    private isNew: boolean = true;

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

                this.isNew = false;

                this.contatoService.getContato(id)
                .then((contato: Contato) => {
                    this.contato = contato;
                });
            }
            
        });
    }

    getFormGroupClass(isValid: boolean, isPristine: boolean): {} {
        return{
            'form-group': true,
            'is-invalid': !isValid && !isPristine,
            'is-valid': isValid && !isPristine
        };
    }

    onSubmit(): void{

        let promise;

        if(this.isNew){
            console.log('cadastrar contato');
            promise = this.contatoService.create(this.contato)
        } else{
            console.log('alterar contato');
            promise = this.contatoService.update(this.contato);
        }

        promise.then(contato => this.location.back());
    }
} 