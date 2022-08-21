import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;

  images = [
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Empire State Building',
      url: 'https://images.unsplash.com/photo-1546436836-07a91091f160?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZW1waXJlJTIwc3RhdGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the airport',
      url: 'https://images.unsplash.com/photo-1601544564660-98f64a967a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZW1pcmF0ZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Empire State Building',
      url: 'https://images.unsplash.com/photo-1546436836-07a91091f160?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZW1waXJlJTIwc3RhdGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the airport',
      url: 'https://images.unsplash.com/photo-1601544564660-98f64a967a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZW1pcmF0ZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Empire State Building',
      url: 'https://images.unsplash.com/photo-1546436836-07a91091f160?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZW1waXJlJTIwc3RhdGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the airport',
      url: 'https://images.unsplash.com/photo-1601544564660-98f64a967a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZW1pcmF0ZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Empire State Building',
      url: 'https://images.unsplash.com/photo-1546436836-07a91091f160?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZW1waXJlJTIwc3RhdGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the airport',
      url: 'https://images.unsplash.com/photo-1601544564660-98f64a967a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZW1pcmF0ZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Empire State Building',
      url: 'https://images.unsplash.com/photo-1546436836-07a91091f160?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZW1waXJlJTIwc3RhdGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the airport',
      url: 'https://images.unsplash.com/photo-1601544564660-98f64a967a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZW1pcmF0ZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Empire State Building',
      url: 'https://images.unsplash.com/photo-1546436836-07a91091f160?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZW1waXJlJTIwc3RhdGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the airport',
      url: 'https://images.unsplash.com/photo-1601544564660-98f64a967a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZW1pcmF0ZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Empire State Building',
      url: 'https://images.unsplash.com/photo-1546436836-07a91091f160?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZW1waXJlJTIwc3RhdGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the airport',
      url: 'https://images.unsplash.com/photo-1601544564660-98f64a967a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZW1pcmF0ZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Empire State Building',
      url: 'https://images.unsplash.com/photo-1546436836-07a91091f160?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZW1waXJlJTIwc3RhdGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the airport',
      url: 'https://images.unsplash.com/photo-1601544564660-98f64a967a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZW1pcmF0ZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
