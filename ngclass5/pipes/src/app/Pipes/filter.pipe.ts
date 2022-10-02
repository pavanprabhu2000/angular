import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:true
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchString: String){
    if(value.length===0 || searchString ==="")
    return value;


    const users=[]
    for(const user of value ){
      if(user['name']===searchString){
        users.push(user);
      }
    }
    return users;
  }

}
