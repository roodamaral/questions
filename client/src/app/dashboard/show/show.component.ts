import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../../dashboard.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  question = {};
  answer = {answer: '', detail: '', user: ''};
  constructor(private _DashboardService: DashboardService, private _route: ActivatedRoute) { }

  ngOnInit() {
  	this._route.paramMap.subscribe( params => {
       	       let id = params.get('id');
       	       this._DashboardService.showQuestion(id, response => {
       	       	console.log(response);
       	       	this.question = response.json();
       	       })
   	      })
  }

  onSubmit(id){
    this._DashboardService.likeAnswer(id, response => {
      this._DashboardService.showQuestion(this.question._id, response=> {
        this.question = response.json();
      })
    });    
  }


}
