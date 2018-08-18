import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }

  getAllPets(){
    return this._http.get('/api/pets');
  }

  addPet(newPet){
    return this._http.post('/api/pets', newPet)
  }

  getOnePet(id){
    return this._http.get('/api/pets/'+id)
  }

  deleteOne(id){
    return this._http.delete('/api/destroy/'+id)
  }

  editOne(id, pet){
    return this._http.patch('/api/pets/edit/'+id, pet)
  }

  like(id){
    return this._http.patch('/api/pets/like/'+id, {})
  }
}
