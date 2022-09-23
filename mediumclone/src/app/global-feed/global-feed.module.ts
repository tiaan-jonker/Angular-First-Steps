import { BannerModule } from './../shared/modules/banner/banner.module';
import { FeedModule } from './../shared/modules/feed/feed.module';
import { RouterModule } from '@angular/router';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
];

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
  ],
})
export class GlobalFeedModule {}
