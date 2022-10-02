import { RegistrationComponent } from './../registration/registration.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestrictGuard implements CanDeactivate<RegistrationComponent> {
  canDeactivate(
    component: RegistrationComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot):boolean {
      if(component.uname?.dirty){
        return window.confirm("are u sure to leave the page")
      }

    return true;
  }

}
