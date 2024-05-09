import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private getEmployees_URL = 'http://localhost:3000/employees';

  constructor(private _http: HttpClient) {}

  addEmployee(data: any): Observable<any> {
    return this._http.post(this.getEmployees_URL, data);
  }

  getEmployees(): Observable<any> {
    return this._http.get(this.getEmployees_URL);
  }

  updateEmployeeData(id: any, data: any): Observable<any> {
    return this._http.put(`${this.getEmployees_URL}/${id}`, data);
  }
}
