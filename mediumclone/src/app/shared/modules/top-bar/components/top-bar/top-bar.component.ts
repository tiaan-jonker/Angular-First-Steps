import {
  isLoggedInSelector,
  isAnonSelector,
  currentUserSelector,
} from './../../../../../auth/store/selectors';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICurrentUser } from 'src/app/shared/types/current-user.interface';
import { IAppState } from 'src/app/shared/types/app-state.interface';

@Component({
  selector: 'mc-topbar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  isLoggedIn$!: Observable<boolean | null>;
  isAnon$!: Observable<boolean>;
  currentUser$!: Observable<ICurrentUser | null>;

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.isAnon$ = this.store.pipe(select(isAnonSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }
}
