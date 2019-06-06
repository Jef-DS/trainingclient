import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserStoreService } from '../services/user-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private userStore: UserStoreService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('Guarding...');
    if (this.userStore.isLoggedIn()) { return true; }
    console.log('AuthGuard#canActivate not authorized');
    this.userStore.redirectUrl = state.url;
    this.router.navigate(['users', 'login']);
    return false;
  }
}
