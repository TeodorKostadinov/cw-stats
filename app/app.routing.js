"use strict";
var router_1 = require('@angular/router');
var get_students_component_1 = require('./components/get-students/get-students.component');
var appRoutes = [
    {
        path: 'get-students',
        component: get_students_component_1.GetStudentsComponent
    },
    {
        path: '',
        redirectTo: '/get-students',
        pathMatch: 'full'
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map