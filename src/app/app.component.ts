import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private http: HttpClient) { }

  onLogin() {
    const b64Encoded = btoa(`${'demovoter'}:${'demovoterpw'}`);
    const loginUrl = 'http://localhost:8080/api/auth/login';

    const headers = new HttpHeaders({'Authorization':'Basic ' + b64Encoded});
    console.log(headers);

    return this.http.post(loginUrl, { headers })
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );

  }


}
