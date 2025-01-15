import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Exam, Exams } from '../../types';
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

}
