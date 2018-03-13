import { NgModule } from '@angular/core';
//Prepara a aplicacao para ser executada em um browser
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'

//api simulada
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service'

import { AppComponent } from './app.component';
import {ContatosModule} from './contatos/contatos.module';
import {AppRoutingModule} from './app-routing.module';
import {DialogService} from './dialog.service';

@NgModule({
    //outros modulos em que iremos usar neste modulo
    imports: [
        AppRoutingModule,
        BrowserModule,
        ContatosModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    //listar todos os componentes, diretivas, pipes em que iremos usar neste modulo
    declarations: [AppComponent],
    //fornecer servicos a nossa aplicacao
    providers: [
        DialogService
    ],
    //qual eh o componente root, de onde vai comecar a nossa aplicacao
    bootstrap: [AppComponent]
})
export class AppModule {}