import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {

  newPet: any;
  err: any = []
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newPet = {
      name: '',
      type: '',
      description: '',
      skill1:'',
      skill2: '',
      skill3:''
    }
  }

  addPet(){
    let obs = this._httpService.addPet(this.newPet);
    obs.subscribe(data=>{
      console.log(data)
      if('errors' in data){
        var errors = []
        for(let e in data['errors']){
          errors.push(data['errors'][e]['message'])
        }
        this.err = errors
        console.log(this.err)
      } else {
        this.goHome()
      }
    })
  }

  goHome(){
    this._router.navigate(['./pets'])
  }



}
