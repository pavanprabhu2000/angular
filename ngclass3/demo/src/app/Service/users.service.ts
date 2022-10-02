import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  getData(){
    return [{name:"aaa",id:"1",desig:"dev"},
    {name:"bbb",id:"2",desig:"dev11"},
    {name:"ccc",id:"3",desig:"dev"},
    {name:"ddd",id:"4",desig:"dev"},
    {name:"eee",id:"5",desig:"dev"},
  ]
  }
}
