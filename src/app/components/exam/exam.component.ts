import { Component, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Exam } from '../../../types';

@Component({
  selector: 'app-exam',
  imports: [],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.scss'
})
export class ExamComponent {
  @Input() exam!: Exam;
}
