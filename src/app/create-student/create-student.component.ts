import { Component } from '@angular/core';
import { StudentsService } from '../services/students.service';

@Component({
    selector: 'app-create-student',
    templateUrl: './create-student.component.html',
    styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
    students:any[]=[]
    constructor(private stud: StudentsService) {
        stud.getStudents().subscribe(res => this.students = res)
     }
    create(age:any,name:any) {
        this.stud.createStudent({ name, age}).subscribe(res => console.log(res))
        this.stud.getStudents().subscribe(res => this.students = res)
    }
    del(id:any){
        this.stud.deleteStudent(id).subscribe(res => console.log(res))
        this.stud.getStudents().subscribe(res => this.students = res)
    }
    upd(id:any,age:any,name:any){
        this.stud.updateStudent(+id,{ name, age}).subscribe(res => console.log());
    }
}
