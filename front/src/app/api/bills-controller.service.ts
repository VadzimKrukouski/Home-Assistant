import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {BillsDto} from "../models/billsDto";
import {Observable, Subscription} from "rxjs";

@Injectable({providedIn: 'root'})
export class BillsControllerService {
  private baseUrl = environment.backURL;

  constructor(private http: HttpClient) {
  }

  public save(dto: BillsDto): Subscription {
    return this.http.post<BillsDto>(`${this.baseUrl}/bills`, dto, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe(
      {
        next: ((response: any) => {
          console.log(response);
        }),

        error: (error => {
          console.log(error)
        })
      }
    );
  }

  public getAll(request): Observable<any> {
    const params = request;
    return this.http.get(`${this.baseUrl}/bills`, {
      headers: {
        'Content-Type': 'application/json'
      },
      params
    })
  }
}
