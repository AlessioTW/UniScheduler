import { Component } from '@angular/core';
import { ExamComponent } from "../components/exam/exam.component";
import { Exam } from '../../types'
import { ExamsService } from '../services/exams.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ExamComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private examsService: ExamsService) { }

  exams: Exam[] = [];

  fetchExams() { // fetch exams from the server
    this.examsService.getExams('http://localhost:3000/exams').subscribe({
      next: (exams) => {
        this.exams = Object.values(exams);
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }

  ngOnInit() {
    this.fetchExams();
  }

}