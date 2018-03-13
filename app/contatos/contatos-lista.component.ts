import { Component, OnInit } from '@angular/core';

import { Contato } from './contato.model';
import { ContatoService } from './contato.service';
import { DialogService } from './../dialog.service';


@Component({
    moduleId: module.id,
    selector: 'contatos-lista',
    templateUrl: 'contatos-lista.component.html',

})
export class ContatosListaComponent implements OnInit {
    contatos: Contato[];
    //objeto
    mensagem: {};
    classesCss: {};

    //usamos o construtor apenas para inicializacoes mais simples
    constructor(
        private contatoService: ContatoService,
        private dialogService: DialogService
    ) { }

    //implementando um ciclo de vida
    ngOnInit(): void {
        this.contatoService.getContatos()
            .then((contatos: Contato[]) => {
                this.contatos = contatos;
            }).catch(err => {
                console.log(err);
                this.mostrarMensagem({
                    tipo: 'danger',
                    texto: 'Ocorreu um erro ao buscar a lista de contatos!'
                });
            })
    }

    onDelete(contato: Contato): void {
        this.dialogService.confirm('Deseja deletar ' + contato.nome + ' ?')
            .then((canDelete: boolean) => {
                if (canDelete) {
                    this.contatoService
                        .delete(contato)
                        .then(() => {

                            this.contatos = this.contatos.filter((c: Contato) => c.id != contato.id);

                            this.mostrarMensagem({
                                tipo: 'success',
                                texto: 'Contato deletado!'
                            });

                        }).catch(err => {
                            console.log(err);
                            this.mostrarMensagem({
                                tipo: 'danger',
                                texto: 'Ocorreu um erro ao deletar Contato'
                            });
                        });
                }
            });
    }

    private mostrarMensagem(mensagem: { tipo: string, texto: string }): void {
        this.mensagem = mensagem;
        this.montarClasses(mensagem.tipo);

        if (mensagem.tipo != 'danger') {
            //tempo para mensagem desaparecer
            setTimeout(() => {
                this.mensagem = undefined;
            }, 3000);
        }
    }

    private montarClasses(tipo: string): void {
        this.classesCss = {
            //classe alert sempre vai ser aplicada
            'alert': true
        };
        this.classesCss['alert-' + tipo] = true; //alert-success
        /*
        {
            'alert': true,
            'alert-success': true,
            'alert-danger': false,
            ...
        }
        */
    }
}