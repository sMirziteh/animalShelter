import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  liked: boolean;
  petId: any;
  onePet: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.petId = params['id']
      this.liked = false;

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

  adopt(){
    let obs = this._httpService.deleteOne(this.petId)
    obs.subscribe(data=>{
      console.log(data)
      this.goHome()
    })
  }

  goHome(){
    this._router.navigate(['/pets'])
  }

  like(id){
    let obs = this._httpService.like(id)
    obs.subscribe(data=>{
      console.log(data)
      this.ngOnInit()
      this.liked = true;
    })
  }


}
