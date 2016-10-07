"use strict";
var StudentModel = (function () {
    function StudentModel(studentId, firstName, lastName, age, occupation, previousExperience, mail, course, phone, implementation, contribution, status, hasLaptop, experienceTxt, subscription, idConfirmation, dateConfirmed, expectations, participatedCW, dateRegistered, dateApproved) {
        this.studentId = studentId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.occupation = occupation;
        this.previousExperience = previousExperience;
        this.mail = mail;
        this.course = course;
        this.phone = phone;
        this.implementation = implementation;
        this.contribution = contribution;
        this.status = status;
        this.hasLaptop = hasLaptop;
        this.experienceTxt = experienceTxt;
        this.subscription = subscription;
        this.idConfirmation = idConfirmation;
        this.dateConfirmed = dateConfirmed;
        this.expectations = expectations;
        this.participatedCW = participatedCW;
        this.dateRegistered = dateRegistered;
        this.dateApproved = dateApproved;
    }
    return StudentModel;
}());
exports.StudentModel = StudentModel;
//# sourceMappingURL=student.model.js.map