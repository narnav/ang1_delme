import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StudentsService {
    apiUrl = "http://localhost:3000/students"

    constructor(private http: HttpClient) { }
    // Create a new student
    createStudent(studentData: any): Observable<any> {
        return this.http.post(this.apiUrl, studentData);
    }

    // Get all students
    getStudents(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }

    // Get a specific student by ID
    getStudentById(id: number): Observable<any> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<any>(url);
    }

    // Update a student
    updateStudent(id: number, studentData: any): Observable<any> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.put(url, studentData);
    }

    // Delete a student
    deleteStudent(id: number): Observable<any> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.delete(url);
    }
}
