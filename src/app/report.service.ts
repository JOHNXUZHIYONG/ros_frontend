import { retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://127.0.0.1:8000';

  get() {
    return this.http.get(this.apiUrl)
  }

  // item
  get_item(id: number) {
    const url = `${this.apiUrl}/get_item/${id}`
    return this.http.get(url).pipe(retry(1),catchError(this.handleError))
  }

  add_item(body: any) {
    const url = `${this.apiUrl}/add_item`
    return this.http.post(url, body)
  }

  delete_item(id: number) {
    const url = `${this.apiUrl}/delete_item/${id}`
    return this.http.delete(url)
  }

  update_item(id: number, body: any) {
    const url = `${this.apiUrl}/update_item/${id}`
    return this.http.put(url, body).pipe(retry(3), catchError(this.handleError))
  }

  // user
  get_user(id: number) {
    const url = `${this.apiUrl}/get_user/${id}`
    return this.http.get(url).pipe(retry(3), catchError(this.handleError))
  }

  add_user(body:any){
    const url = `${this.apiUrl}/add_user`
    return this.http.post(url, body).pipe(retry(1), catchError(this.handleError))
  }

  delete_user(id:number){
    const url = `${this.apiUrl}/delete_user/${id}`
    return this.http.delete(url).pipe(retry(1), catchError(this.handleError))
  }

  update_user(id:number, body:any){
    const url = `${this.apiUrl}/update_user/${id}`
    return this.http.put(url,body).pipe(retry(1), catchError(this.handleError))
  }

  // pdf
  get_pdf(id:number){
    const url = `${this.apiUrl}/get_pdf/${id}`
    return this.http.get(url, { responseType: 'blob' }).pipe(retry(1), catchError(this.handleError))
  }

  add_pdf(id:number, content:string){
    const url = `${this.apiUrl}/add_pdf/${id}`
    return this.http.post(url,content).pipe(retry(1), catchError(this.handleError))
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 404) {
      console.error("Resource is not found:", error.message);
      return throwError("Resource is not found ....");
    } 
    else if (error.status === 0){
      console.error("Internet connection is not good", error.message);
      return throwError("Internet connection is not good...")
    }

    else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
      return throwError( `Backend returned code ${error.status}`)
    }
  }


  get_report(id: number) {
    const url = `${this.apiUrl}/get_pdf/${id}`
    return this.http.get(url, { responseType: 'blob' })
  }



  getReport(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/fetch_one/${id}`);
  }

  insertReport(reportData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/insert_one`, reportData);
  }

  deleteReport(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete_one/${id}`);
  }
}
