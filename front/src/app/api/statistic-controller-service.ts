import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class StatisticControllerService {
  private baseUrl = environment.backURL;

  constructor(private http: HttpClient) {
  }

  public getGeneralStatisticByMonth(): Observable<any>{
    return this.http.get(`${this.baseUrl}/statistic/general`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      })
  }

  public getMonthStatisticByType(type: String) : Observable<any>{
    return this.http.get(`${this.baseUrl}/statistic/monthByType/` + type,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      })
  }
}
