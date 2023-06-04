import { Component } from '@angular/core';

@Component({
    selector: 'app-baga',
    templateUrl: './baga.component.html',
    styleUrls: ['./baga.component.css']
})
export class BagaComponent {
    style = 'blue'
    students=[{name:"itay",age:9},{name:"maya",age:8},{name:"yaya",age:19}]
    cngColor() {
        this.style = 'green'
    }
}
