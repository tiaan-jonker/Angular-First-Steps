import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages: any[] = [];

  //* wikipedia is a dependency of app component, needs
  //* it to work correctly
  constructor(private wikipediaService: WikipediaService) {
    //* the below is valid but not desirable because we
    //* are creating a dependency. We should leave it to
    //* the components to create an instance of those
    //* things themselves. DI is automatic.
    // this.wikipediaService = new WikipediaService()
  }

  //* this is emitted from seachbar component to app
  //* know it is term: string as defined in that
  //* component
  onTermSubmit(term: string) {
    this.wikipediaService.search(term).subscribe((response: any) => {
      this.pages = response.query.search;
      console.log(this.pages);
    });
  }
}
