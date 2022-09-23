import { ActivatedRoute, Params, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import {
  feedSelector,
  errorSelector,
  isLoadingSelector,
} from './../../store/selectors';
import { Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { getFeedAction } from '../../store/actions';
import { IGetFeedResponse } from '../../types/get-feed-response.interface';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy {
  @Input('apiUrl') apiUrlProps!: string;

  feed$!: Observable<IGetFeedResponse | null>;
  error$!: Observable<string | null>;
  isLoading$!: Observable<boolean>;
  limit = environment.limit;
  baseUrl!: string;
  queryParamsSubscription!: Subscription;
  currentPage!: number;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
    this.fetchData();
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }

  initializeValues(): void {
    // @ts-ignore
    this.feed$ = this.store.pipe(select(feedSelector));
    // @ts-ignore
    this.error$ = this.store.pipe(select(errorSelector));
    //@ts-ignore
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.baseUrl = this.router.url.split('?')[0];
  }

  initializeListeners() {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        console.log(params);
        this.currentPage = Number(params['page']) || 1;
      }
    );
  }

  fetchData(): void {
    this.store.dispatch(getFeedAction({ url: this.apiUrlProps }));
  }
}
