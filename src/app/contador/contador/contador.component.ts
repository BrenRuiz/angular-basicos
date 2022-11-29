import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{title}}</h1>
        <h1>La base es: <strong>{{base}}</strong></h1>
        <button (click)="acumular(base)">+ {{base}}</button>
        <span> {{num}} </span>
        <button (click)="acumular(- base)">- {{base}}</button>`
})
export class ContadorComponent {
    public title: string = 'Contador App';
    public num: number = 10;
    public base: number = 5;

    acumular(valor: number) {
        this.num += valor;
    }
}


