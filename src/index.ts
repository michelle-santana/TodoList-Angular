import "./style.css";
import "material-icons/iconfont/material-icons.css";
import { Tarefa } from "./Tarefa";
import { Prioridade } from "./Prioridade"
import {Lista} from "./Lista";


let t = new Tarefa("Escovar os dentes", Prioridade.alta);


console.log(t);


let t1 = new Tarefa(
    "Lavar louças",
    Prioridade.baixa
);

let t2 = new Tarefa(
"Estudar",
Prioridade.alta
);

let t3 = new Tarefa(
    "Sair de casa",
    Prioridade.media
);

let lista = new Lista
lista.addTarefa(t1);
lista.addTarefa(t2);
lista.addTarefa(t3);

console.log(lista)
lista.removeTarefa(t2)

const form: HTMLFormElement = <HTMLFormElement> document.getElementById("form");
const input : HTMLInputElement = <HTMLInputElement> document.getElementById("tf_2do");

form.addEventListener (
    "submit", 
    (event) => {
    event.preventDefault();
    let t = new Tarefa (input.value, Prioridade.baixa);
    lista.addTarefa(t);
    console.log(lista);
}

)