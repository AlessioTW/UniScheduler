import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Exam } from '../../../types';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-exam',
  imports: [CommonModule, ButtonModule],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.scss'
})
export class ExamComponent {
  @Input() exam!: Exam;
  @Output() edit: EventEmitter<Exam> = new EventEmitter<Exam>();

  editExam() {
    this.edit.emit(this.exam);
  }
}
