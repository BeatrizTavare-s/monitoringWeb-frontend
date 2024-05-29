import { Injectable } from "@angular/core"; 
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
@Injectable({
    providedIn: 'root'
})
export class MonitoringHistoryService {
    private apiUrl = `${environment.apiUrl}/monitoring`
    constructor(private httpClient: HttpClient) {
    }
    
    getMonitoringHistoryService(): Observable<any> {
        return this.httpClient.get<any>(this.apiUrl);
      }
}