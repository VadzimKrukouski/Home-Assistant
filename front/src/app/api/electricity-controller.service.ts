import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ElectricityDto} from "../models/ElectricityDto";
import {Observable, Subscription} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class ElectricityControllerService {
  private baseUrl = environment.backURL;

  constructor(private http: HttpClient) {
  }

  public save(dto: ElectricityDto): Subscription {
    return this.http.post<ElectricityDto>(`${this.baseUrl}/electricity-meter`, dto, {
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

  public getData(): Observable<ElectricityDto[]> {
    return this.http.get<ElectricityDto[]>(`${this.baseUrl}/electricity-meter/form-data`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
