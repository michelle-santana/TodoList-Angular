import { Prioridade } from "./Prioridade"

 export class Tarefa {
    private descricao: string;
    private prioridade: Prioridade;
    private _concluido: boolean

    constructor(descricao: string, prioridade: Prioridade, concluido: boolean = false) {
        this.descricao = descricao;
        this.prioridade = prioridade;
        this._concluido = concluido;
    }

    public set concluido(concluido: boolean) {
        this._concluido = concluido;
    }

    public get concluido(): boolean {
        return this._concluido;
    }
}