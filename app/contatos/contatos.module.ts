import {NgModule} from '@angular/core';
//fornecer as diretivas mais comumentes usadas no Angula2, exemplo *ngfor
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

import {ContatoDetalheComponent} from './contato-detalhe.component';
import {ContatosListaComponent} from './contatos-lista.component';
import {ContatoRoutingModule} from './contato-routing.module';
import {ContatoService} from './contato.service';

@NgModule({
    imports:[
        CommonModule,
        ContatoRoutingModule,
        FormsModule
    ],
    declarations:[
        ContatosListaComponent,
        ContatoDetalheComponent
    ],
    exports:[
        ContatosListaComponent
    ],
    providers:[
        ContatoService
    ]
})
export class ContatosModule{}
