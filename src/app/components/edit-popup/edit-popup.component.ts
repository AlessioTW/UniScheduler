import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { Exam } from '../../../types';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-edit-popup',
  standalone: true,
  imports: [
    DialogModule,
    CommonModule,
    FormsModule,
    RatingModule,
    ButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './edit-popup.component.html',
  styleUrl: './edit-popup.component.scss',
})
export class EditPopupComponent {
  constructor(private formBuilder: FormBuilder) {
    this.examForm = this.formBuilder.group({
      name: ['', []],
      cfu: [0, []],
      completed: [false, []],
      description: ['', []],
    });
  }

  @Input() display: boolean = false;
  @Output() displayChange = new EventEmitter<boolean>(); // we can't name it display, but we have to put it because it has a two-way binding

  @Input() header!: string;

  @Input() exam: Exam = {
    name: '',
    cfu: 0,
    completed: false,
    description: '',
  };
  @Output() confirm = new EventEmitter<Exam>();
  examForm: any;
  
  ngOnChanges() {
    this.examForm.patchValue(this.exam);
  }

  onConfirm() {
    const { name, cfu, completed, description } = this.examForm.value;

    this.confirm.emit({
      name: name || '',
      cfu: cfu || 0,
      completed: completed || false,
      description: description || '',
    });

    this.display = false;
    this.displayChange.emit(this.display);
  }

  onCancel() {
    this.display = false;
    this.displayChange.emit(this.display);
  }
}