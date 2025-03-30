import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {IncomeDto} from "../models/IncomeDto";
import {Subscription} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class IncomeControllerService {
  private baseUrl = environment.backURL;

  constructor(private http: HttpClient) {
  }

  public save(dto: IncomeDto): Subscription {
    return this.http.post<IncomeDto>(`${this.baseUrl}/incomes`, dto, {
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
    )
  }

}
