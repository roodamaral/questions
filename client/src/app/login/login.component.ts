import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../dashboard.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "";
  constructor(private _DashboardService: DashboardService) { }

  onSubmit(){
  	console.log('running');
  	this._DashboardService.getUser(this.username, callback=>{ 
  		console.log('Username was passed to the Service.');
      this._DashboardService.goToList();
  	});
  	
  }




  ngOnInit() {
  }

}
