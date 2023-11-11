import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {WaterMeterDto} from "../models/waterMeterDto";
import {Observable, Subscription} from "rxjs";

@Injectable({providedIn: 'root'})
export class WaterMetersControllerService {
  private baseUrl = environment.backURL;

  constructor(private http: HttpClient) {
  }

  public save(dto: WaterMeterDto): Subscription {
    console.log("Create water meter, dto = " + dto)
    return this.http.post<WaterMeterDto>(`${this.baseUrl}/water-meter`, dto, {
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
  };

  public getData(request) : Observable<WaterMeterDto[]> {
    const params = request;
    return this.http.get<WaterMeterDto[]>(`${this.baseUrl}/water-meter/formData`, {
      headers: {
        'Content-Type': 'application/json'
      },
      params
    })
  }



}
