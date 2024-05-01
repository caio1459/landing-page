import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INewsLarer } from '../interfaces/INewsLarer';

@Injectable({
  providedIn: 'root',
})
export class NewsLarerService {
  private endpointUrl =
    'https://faed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws/';

  constructor(private http: HttpClient) {}

  sendData(name: string, email: string): Observable<INewsLarer> {
    const data = { name, email };
    return this.http.post<INewsLarer>(this.endpointUrl, data);
  }
}
