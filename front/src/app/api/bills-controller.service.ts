import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {BillsDto} from "../models/billsDto";
import {catchError, Observable, tap, throwError} from "rxjs";
import {PageRequest, PageResponse} from "../models/page-request.model";

@Injectable({providedIn: 'root'})
export class BillsControllerService {
  private baseUrl = environment.backURL;
  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {
  }

  public save(dto: BillsDto): Observable<BillsDto> {
    return this.http.post<BillsDto>(`${this.baseUrl}/bills`, dto, {
      headers: this.headers
    }).pipe(
      tap(response => console.log('Bill saved successfully:', response)),
      catchError(this.handleError)
    );
  }

  public getAll(request: PageRequest): Observable<PageResponse<BillsDto>> {
    const filtered: { [key: string]: string } = {};
    for (const key in request) {
      const value = request[key];
      if (value !== undefined) {
        filtered[key] = value;
      }
    }
    const params = new HttpParams({ fromObject: filtered });

    return this.http.get<PageResponse<BillsDto>>(`${this.baseUrl}/bills`, {
      headers: this.headers,
      params: params
    }).pipe(
      tap(response => console.log('Bills retrieved successfully')),
      catchError(this.handleError)
    );
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
