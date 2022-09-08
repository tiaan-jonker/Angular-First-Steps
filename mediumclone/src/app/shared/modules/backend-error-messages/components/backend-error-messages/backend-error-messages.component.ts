import { IBackendErrors } from './../../../../types/backend-errors.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorProps!: any;

  errorMessages!: string[];

  constructor() {}

  ngOnInit(): void {
    console.log(this.backendErrorProps);
    this.errorMessages = Object.keys(this.backendErrorProps).map(
      (name: string) => {
        const messages = this.backendErrorProps[name].join(' ');
        return `${name} ${messages}`;
      }
    );
  }
}
