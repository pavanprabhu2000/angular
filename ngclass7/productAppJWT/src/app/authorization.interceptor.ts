import { ProductsService } from './Services/products.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor(private products:ProductsService) {}

  intercept(request: HttpRequest<unknown>, handler: HttpHandler) {

    const modif =request.clone({
      headers:request.headers.append('Authorization',`Bearer ${this.products.getToken()}`)
    })
    return handler.handle(modif)
  }
}
