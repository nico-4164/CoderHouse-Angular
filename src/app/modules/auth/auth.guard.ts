import {Injectable} from '@angular/core';
import { CanActivateFn } from '@angular/router';

import {Observable} from 'rxjs';

Injectable({
  providedIn: 'root'
})

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};
