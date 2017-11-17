import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../../dashboard.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  questions = [];
  constructor(private _DashboardService: DashboardService) { }

  ngOnInit() {
  	this._DashboardService.getQuestions(callback=>{
    	this.questions = (callback);
    });
  }



}
