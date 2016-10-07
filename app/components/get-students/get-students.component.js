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
var get_students_service_1 = require('../../services/get-students.service');
var GetStudentsComponent = (function () {
    function GetStudentsComponent(_service) {
        this._service = _service;
        this.student = null;
    }
    GetStudentsComponent.prototype.ngOnInit = function () {
        this.getStudents();
    };
    GetStudentsComponent.prototype.getStudents = function () {
        var _this = this;
        this._service.getStudents().subscribe(function (request) { _this.students = request; });
    };
    GetStudentsComponent = __decorate([
        core_1.Component({
            selector: 'get-students',
            templateUrl: 'app/components/get-students/get-students.component.html',
            styleUrls: ['app/components/get-students/get-students.component.css']
        }), 
        __metadata('design:paramtypes', [get_students_service_1.GetStudentsService])
    ], GetStudentsComponent);
    return GetStudentsComponent;
}());
exports.GetStudentsComponent = GetStudentsComponent;
//# sourceMappingURL=get-students.component.js.map