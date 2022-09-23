import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input('total') totalProps?: number;
  @Input('limit') limitProps?: number;
  @Input('currentPage') currentProps?: number;
  @Input('url') urlProps?: string;

  constructor() {}

  pagesCount!: number;

  ngOnInit(): void {
    // @ts-ignore
    this.pagesCount = Math.ceil(this.totalProps / this.limitProps);
    
  }
}
