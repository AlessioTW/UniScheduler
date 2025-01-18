import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Exam } from '../../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exam',
  imports: [CommonModule],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.scss'
})
export class ExamComponent {
  @Input() exam!: Exam;
}
