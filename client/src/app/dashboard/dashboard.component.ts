import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../dashboard.service'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username = '';
  constructor(private _DashboardService: DashboardService) { }
  	
  onSubmit(){
  	this._DashboardService.logoutUser();
  }




  ngOnInit() {
  	this._DashboardService.showUser(response =>{this.username = response; console.log(this.username);});
  	
  }

}
