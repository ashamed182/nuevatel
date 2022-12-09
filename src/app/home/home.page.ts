import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { _ID } from './../app.module';

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
  id: string;
  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.id = _ID;
    console.log(this.id, 'id app');
  }

  public loadingEvent(e) {
    const proto  = document.location.protocol || 'http:';
    const node   = document.createElement('script');
    node.type  = 'text/javascript';
    node.async = true;
    node.src   = 'https://webchat-nuevatel.i6.inconcertcc.com/v3/click_to_chat?token=9A9D0B61F842C5093CBFC0E6AFBC56FA';
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(node, s);
  }

  public loadingEvent2(e) {
    const proto  = document.location.protocol || 'http:';
    const node   = document.createElement('script');
    node.type  = 'text/javascript';
    node.async = true;
    node.src   = 'https://webchat-soporte.i6.inconcertcc.com/v3/click_to_chat?token=AB5616946B9C4FA63D1383B180432247';
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(node, s);
  }

  public loadingEvent3(e) {
    const proto  = document.location.protocol || 'http:';
    const node   = document.createElement('script');
    node.type  = 'text/javascript';
    node.async = true;
    node.src   = 'https://webchat-nuevatel.i6.inconcertcc.com/v3/click_to_chat?token=2AD03E30195D6240943B84B2EBFD3B25';
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(node, s);
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
