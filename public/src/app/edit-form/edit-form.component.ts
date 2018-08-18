import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  err: any=[]
  petId:any
  onePet: any
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.petId = params['id']
      this.getOnePet()
  });
  }

  getOnePet(){
    let obs = this._httpService.getOnePet(this.petId)
    obs.subscribe(data=>{
      console.log(data)
      this.onePet = data
    })
  }

  editPet(id){
    let obs = this._httpService.editOne(this.petId, this.onePet);
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
    this._router.navigate(['./pets/'+this.petId])
  }

}
