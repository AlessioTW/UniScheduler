import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Exam } from '../../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamsService {

  constructor(private apiService: ApiService) { }

  getExams = (
    url: string
  ): Observable<Exam[]> => {
    return this.apiService.get(url, {
      responseType: 'json',
    });
  };

}
