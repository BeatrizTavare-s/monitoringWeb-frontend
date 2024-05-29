import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class SiteService {
  constructor(private http: HttpClient) { }
  private apiUrl = `${environment.apiUrl}/sites`
  sendSite(port: number, url: string): Observable<any> {
    const data = { port, url };

    return this.http.post<any>(this.apiUrl, data);
  }
}

