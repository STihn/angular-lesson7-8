import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students:FormGroup;
  constructor(private fb: FormBuilder) {
    this.students = fb.group({
      rowsStudent: fb.array([
        fb.group({
          fio: fb.control('', Validators.required),
        })
      ])
    })
   }

  ngOnInit(): void {
    // this.students.setValue(JSON.parse(localStorage.getItem('students')))
}

  get rowsStudent(): FormArray {
    return this.students.get('rowsStudent') as FormArray;
  }

  get fio(): FormControl {
    return this.students.get('fio') as FormControl;
  }

  insert(i) {
    this.rowsStudent.insert(i, this.fb.group({
      fio: this.fb.control('')
   }));
  //  localStorage.setItem('students', JSON.stringify(this.students.value))
  }

  remoute(i) {
   this.rowsStudent.removeAt(i);
  }
}
