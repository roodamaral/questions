import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../../dashboard.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  question = {};
  answer = {answer: '', detail: '', user: '', likes: 0};
  constructor(private _DashboardService: DashboardService, private _route: ActivatedRoute) { }

  onSubmit(){
  	this._DashboardService.updateQuestion(this.question._id, this.answer, response => {
      this.question = response.json();
      console.log("Question Added on the Backend....Refreshing info.");
      this._DashboardService.goToList();
      });

  	
  }


  ngOnInit() {
  	this._route.paramMap.subscribe( params => {
       	       let id = params.get('id');
       	       this._DashboardService.showQuestion(id, response => {
       	       	console.log(response);
       	       	this.question = response.json();
       	       })
   	      })
  	this._DashboardService.showUser(response =>{this.answer.user = response;});
  }

}
