import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  lessons:FormGroup;
  constructor(private fb: FormBuilder) {
    this.lessons = fb.group({
      rows: fb.array([
        fb.group({
          date: fb.control('', Validators.required),
          theme: fb.control('', Validators.required),
          homework: fb.control('', Validators.required),
          note: fb.control('')
        })
      ])
    })
   }

  ngOnInit(): void {
    // this.lessons.setValue(JSON.parse(localStorage.getItem('lessons')))
  }

  get rows(): FormArray {
    return this.lessons.get('rows') as FormArray;
  }

  get date(): FormControl {
    return this.lessons.get('date') as FormControl;
  }

  get theme(): FormControl {
    return this.lessons.get('theme') as FormControl;
  }

  get homework(): FormControl {
    return this.lessons.get('homework') as FormControl;
  }

  get note(): FormControl {
    return this.lessons.get('note') as FormControl;
  }

  insert(i) {
    this.rows.insert(i, this.fb.group({
      date: this.fb.control(''),
      theme: this.fb.control(''),
      homework: this.fb.control(''),
      note: this.fb.control('')
   }));
  //  localStorage.setItem('lessons', JSON.stringify(this.lessons.value))
  }

  remoute(i) {
   this.rows.removeAt(i);
  }
}

