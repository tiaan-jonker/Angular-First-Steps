import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-message',
  template: '<div>{{messageProps}}</div>',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {
  @Input('message') messageProps: string = 'Something went wrong';

  constructor() {}

  ngOnInit(): void {}
}
