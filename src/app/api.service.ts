import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, CreateCategory } from './_models/category';
import { CreateReport, Report } from './_models/report';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL:string;
  constructor(private http: HttpClient) {
    this.API_URL = 'http://127.0.0.1:8000'
  }

  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.API_URL + '/category');
  }

  createCategory(data: CreateCategory):Observable<Category>{
    return this.http.post<Category>(this.API_URL + '/category', data);
  }

  getReports():Observable<Report[]>{
    return this.http.get<Report[]>(this.API_URL + '/report');
  }

  createReport(data: CreateReport):Observable<Report>{
    return this.http.post<Report>(this.API_URL + '/report', data);
  }

  
}
