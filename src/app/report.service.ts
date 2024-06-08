import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://127.0.0.1:8000';

  get(){
    return this.http.get(this.apiUrl)
  }
  get_item(id:number){
    const url = `${this.apiUrl}/get_item/${id}`
    return this.http.get(url)
  }

  add_item(body:any){
    const url = `${this.apiUrl}/add_item`
    return this.http.post(url, body)
  }

  delete_item(id:number){
    const url = `${this.apiUrl}/delete_item/${id}`
    return this.http.delete(url)
  }

  update_item(id:number, body:any){
    const url = `${this.apiUrl}/update_item/${id}`
    return this.http.put(url, body)
  }


  get_report(id:number){
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
