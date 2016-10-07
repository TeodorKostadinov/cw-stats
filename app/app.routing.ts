import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetStudentsComponent} from './components/get-students/get-students.component';

const appRoutes : Routes = [
	
	{
		path: 'get-students',
		component: GetStudentsComponent
	},
	{
		path: '',
		redirectTo: '/get-students',
		pathMatch:'full'
	},

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);