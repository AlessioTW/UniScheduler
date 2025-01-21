import { Component } from '@angular/core';
import { ExamComponent } from "../components/exam/exam.component";
import { Exam, Exams } from '../../types'
import { ExamsService } from '../services/exams.service';
import { CommonModule } from '@angular/common';
import { EditPopupComponent } from '../components/edit-popup/edit-popup.component';

@Component({
  selector: 'app-home',
  imports: [ExamComponent, CommonModule, EditPopupComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private examsService: ExamsService) { }

  exams: Exam[] = [];

  displayEditPopup: boolean = false;
  displayDeletePopup: boolean = false;

  toggleEditPopup(exam: Exam) {
    this.selectedExam = exam;
    this.displayEditPopup = true;
  }

  selectedExam: Exam = {
    id: 0,
    name: '',
    cfu: 0,
    completed: false,
    description: '',
  };

  onConfirmEdit(exam: Exam) {
    if (!this.selectedExam.id) {
      return;
    }

    this.editExam(exam, this.selectedExam.id);
    this.displayEditPopup = false;
  }

  editExam(exam: Exam, id: number) {
    this.examsService
      .editExam(`http://localhost:3000/exams/${id}`, exam)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.fetchExams();
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  fetchExams() { // fetch exams from the server
    this.examsService.getExams('http://localhost:3000/exams')
    .subscribe({
      next: (data: Exams) => {
        this.exams = data.items;
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