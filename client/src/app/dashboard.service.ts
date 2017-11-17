import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Router, ActivatedRoute } from '@angular/router'

@Injectable()
export class DashboardService {

  constructor(private _http: Http, private router: Router, private route: ActivatedRoute) {   }
	user = '';


  getUser(user, callback){
  	this.user = user;
	console.log(this.user);
	callback(user);
  }

  showUser(callback){
  	console.log(this.user);
  	callback(this.user);
  }

  logoutUser(){
  	this.user = '';
  	this.router.navigate(['/']);
  }

  goToList() {  
  	console.log(this.user);
    this.router.navigate(['/questions', 'all']);
}

  goToShow(id){
      this.router.navigate(['/questions', id])
    }

  createQuestion(question, callback){
    this._http.post('/questions', question).subscribe(
      (response)=>{
        console.log("The recipie has left the service and entered the database");
        callback(response);
      },
      (error) =>{
        console.log('The recipie could not leave the service and did not enter the database');
      })
  }


  getQuestions(callback){
  this._http.get('/all').subscribe( 
  (response) => {
    console.log(response.json());
    let x = response.json();
    callback(x);

  },
  (error) => {
   console.log('error');
  } 
);}

  showQuestion(id, callback){
    this._http.get('/question/'+id).subscribe(
      (response)=>{
        console.log("Attempting to get the specific question in the server side");
        callback(response);
      },
      (error)=>{
        console.log("Didn't even leave the front-end bro!")
      }
  )}

  updateQuestion(id, answer, callback){
      this._http.post('/questions/update/'+id, answer).subscribe(
        (response)=>{
          console.log("Attempting to send the specific answer in the server side for update");
          callback(response);
        },
        (error)=>{
          console.log("Didn't even leave the front-end bro!")
        }
    )}

  likeAnswer(id, callback){
    this._http.post('/questions/like/'+id, id).subscribe(
      (response)=>{
        console.log("Attempting to like the answer in the server side");
        callback(response);
      },
      (error)=>{
        console.log("Didn't even leave the front-end bro!")
      }
  )}


}