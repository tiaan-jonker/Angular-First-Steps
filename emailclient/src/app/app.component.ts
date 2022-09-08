import { BehaviorSubject } from 'rxjs';
import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  signedin$: BehaviorSubject<boolean>;

  constructor(private authService: AuthService) {
    this.signedin$ = this.authService.singedin$;
  }

  ngOnInit() {
    this.authService.checkUserAuthStatus().subscribe(() => {});
  }
}
