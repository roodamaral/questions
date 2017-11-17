import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../../dashboard.service'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  question = {question: '', description: ''};
  constructor(private _DashboardService: DashboardService) { }

  onSubmit(){
  	this._DashboardService.createQuestion(this.question, response => {
   	  console.log("Question created on ServerSide");
      this._DashboardService.goToList();
      });
 
  }

  ngOnInit() {
  	
  }

}
