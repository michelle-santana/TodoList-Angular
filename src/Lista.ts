import {Tarefa} from "./Tarefa";
import {Prioridade } from "./Prioridade";

export class Lista{
    private _lista: Tarefa[] = [];

    addTarefa (t:Tarefa){
        this._lista.push(t);
        return t;
    }

    removeTarefa(t: Tarefa){
        let pos: number = this._lista.indexOf(t);
        if( pos > -1){
            this._lista.splice(pos, 1);
        }
    }
}


