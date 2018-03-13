import {InMemoryDbService } from 'angular-in-memory-web-api'

import {Contato} from './contatos/contato.model'

export class InMemoryDataService implements InMemoryDbService{

    createDb():{}{

        let contatos: Contato[] = [
            {id: 1, nome: 'Fernado Crafa',email: 'fernan197@gotmail.com', telefone: '(55)3339-7849'},
            {id: 2, nome: 'Brafantino da Costa',email: 'costadasilca@gotmail.com', telefone: '(55)3339-7849'},
            {id: 3, nome: 'Jilmar Pereira',email: 'giknar@gotmail.com', telefone: '(55)3339-7849'},
            {id: 4, nome: 'Batista da silxa',email: 'vavars@gmail.com', telefone: '(55)3339-7849'},
            {id: 5, nome: 'Brina Costatine',email: 'costatine@hotmail.com', telefone: '(55)3339-7849'},
        ];

        return {contatos};
    }
}