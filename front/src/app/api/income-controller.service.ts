import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {IncomeDto} from "../models/IncomeDto";
import {catchError, Observable, tap, throwError} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class IncomeControllerService {
  private baseUrl = environment.backURL;
  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {
  }

  public save(dto: IncomeDto): Observable<IncomeDto> {
    return this.http.post<IncomeDto>(`${this.baseUrl}/incomes`, dto, {
      headers: this.headers
    }).pipe(
      tap(response => console.log('Income saved successfully:', response)),
      catchError(this.handleError)
    )
  }

  public getIncomesByCurrentMonth(): Observable<IncomeDto[]> {
    return this.http.get<IncomeDto[]>(`${this.baseUrl}/incomes/incomes-by-month`, {
      headers: this.headers
    }).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }

}
