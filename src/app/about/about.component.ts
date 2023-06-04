import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent {
    uName="paz"
    students=['itay','maya','paz']
    samp(age:any) {
        console.log(age);

    }

    msg=""
    greet(fName:string,lName:string){
        this.msg =`Welcome ${fName} ${lName}`
    }
}
