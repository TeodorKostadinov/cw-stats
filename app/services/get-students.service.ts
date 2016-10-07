import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { Http, Headers, Response } from '@angular/http';

import { StudentModel } from '../models/student.model'; 

import {Observable} from 'rxjs/Rx';

@Injectable()
export class GetStudentsService {

	private serverUrl = 'http://localhost:8080';
  	private getStudentsServerController = '/get-students';

	constructor(private _router: Router, private http: Http){}

	getStudents():Observable<StudentModel[]>{
		let headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' });
		return this.http.post(this.serverUrl + this.getStudentsServerController, null, { headers: headers })
	        .map(this.extractData)
	                .map((students: Array<any>) => {
	                    let result:Array<StudentModel> = [];
	                    
						students.forEach((student) => {
							 
						  result.push(new StudentModel(student.studentId, 
						  	student.firstName, student.lastName,student.age, student.occupation,
							student.previousExperience, student.mail, student.course, student.phone, 
							student.implementation, student.contribution, student.status, student.hasLaptop, 
							student.experienceTxt, student.subscription, student.idConfirmation, 
							student.dateConfirmed, student.expectations, student.participatedCW, 
							student.dateRegistered, student.dateApproved));
						});
	                    
	                  return result;
	                });
	}

  private extractData(response: Response) {
      let body = response.json();
      return body;
  }

}