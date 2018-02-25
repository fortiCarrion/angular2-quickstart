import { NgModule } from '@angular/core';
//Prepara a aplicacao para ser executada em um browser
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ContatosModule} from './contatos/contatos.module';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
    //outros modulos em que iremos usar neste modulo
    imports: [
        AppRoutingModule,
        BrowserModule,
        ContatosModule
    ],
    //listar todos os componentes, diretivas, pipes em que iremos usar neste modulo
    declarations: [AppComponent],
    //qual eh o componente root, de onde vai comecar a nossa aplicacao
    bootstrap: [AppComponent]
})
export class AppModule {}