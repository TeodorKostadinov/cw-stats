"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var student_model_1 = require('../models/student.model');
var GetStudentsService = (function () {
    function GetStudentsService(_router, http) {
        this._router = _router;
        this.http = http;
        this.serverUrl = 'http://localhost:8080';
        this.getStudentsServerController = '/get-students';
    }
    GetStudentsService.prototype.getStudents = function () {
        var headers = new http_1.Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' });
        return this.http.post(this.serverUrl + this.getStudentsServerController, null, { headers: headers })
            .map(this.extractData)
            .map(function (students) {
            var result = [];
            students.forEach(function (student) {
                result.push(new student_model_1.StudentModel(student.studentId, student.firstName, student.lastName, student.age, student.occupation, student.previousExperience, student.mail, student.course, student.phone, student.implementation, student.contribution, student.status, student.hasLaptop, student.experienceTxt, student.subscription, student.idConfirmation, student.dateConfirmed, student.expectations, student.participatedCW, student.dateRegistered, student.dateApproved));
            });
            return result;
        });
    };
    GetStudentsService.prototype.extractData = function (response) {
        var body = response.json();
        return body;
    };
    GetStudentsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], GetStudentsService);
    return GetStudentsService;
}());
exports.GetStudentsService = GetStudentsService;
//# sourceMappingURL=get-students.service.js.map