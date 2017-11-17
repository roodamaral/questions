import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './dashboard/list/list.component';
import { NewComponent } from './dashboard/new/new.component';
import { ShowComponent } from './dashboard/show/show.component';
import { UpdateComponent } from './dashboard/update/update.component';


const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: LoginComponent,
		children: []
	},
	{ 
		path: 'questions', 
		component: DashboardComponent, 
		children:[	{path: 'all', 	component: ListComponent},
					{path: 'new', 	component: NewComponent},
					{path: 'update/:id', component: UpdateComponent},
					{path: ':id', component: ShowComponent}
				]
	},


@NgModule({
	imports: [RouterModule.forRoot(routes)], 
	exports: [RouterModule]
})

export class AppRoutingModule { }