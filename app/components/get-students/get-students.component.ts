import { Component , OnInit} from '@angular/core';

import {StudentModel} from '../../models/student.model';
import { GetStudentsService } from '../../services/get-students.service';

@Component({
	selector: 'get-students',
    templateUrl: 'app/components/get-students/get-students.component.html',
    styleUrls: ['app/components/get-students/get-students.component.css']
})

export class GetStudentsComponent {

	students: StudentModel[];
	student: StudentModel=null;

	constructor(private _service:GetStudentsService){}

	 ngOnInit(){
    	this.getStudents();
    }
 
	getStudents() : void {
        this._service.getStudents().subscribe(
            request => {this.students = request }
         );
    }
}