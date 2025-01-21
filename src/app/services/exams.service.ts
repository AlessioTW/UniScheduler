import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Exams } from '../../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamsService {

  constructor(private apiService: ApiService) { }

  getExams = (
    url: string
  ): Observable<Exams> => {
    return this.apiService.get(url, {
      responseType: 'json',
    });
  };

  editExam = (url: string, body: any): Observable<any> => {
    return this.apiService.put(url, body, {});
  };

  deleteExam = (url: string): Observable<any> => {
    return this.apiService.delete(url, {});
  };

}
