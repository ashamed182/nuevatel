import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  // eslint-disable-next-line max-len
  endpoint = 'https://chat1-nuevatel.i6.inconcertcc.com/inconcert/apps/webdesigner/WebChatVivaAppSinLogin?token=2AD03E30195D6240943B84B2EBFD3B25';
  httpOptions = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  show = false;
  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  loadingEvent(e) {
    // eslint-disable-next-line no-debugger
    debugger;
    this.handleRefresh(e);
  }

  handleRefresh(event) {
      if (event) {
        this.show = true;
        this.getContent();
      }
      setTimeout(() => {
        this.hideSpinner();
      }, 5000);
  };

  getContent(): Observable<any> {
    return this.httpClient.get<any>(this.endpoint)
      .pipe(
        tap(content => console.log(content,'retrieved!')),
        catchError(this.handleError<any>('Get content', [])),
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private hideSpinner() {
    if(this.show === true) {
      console.log(this.show,'OFF!');
      this.show = false;
    }

  }

}
