import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface education {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-emp-edit',
  templateUrl: './emp-edit.component.html',
  styleUrl: './emp-edit.component.css',
})
export class EmpEditComponent implements OnInit {
  employeeForm: FormGroup;

  educations: education[] = [
    { value: 'Senior Secondary Stage', viewValue: 'Senior Secondary Stage' },
    { value: 'Undergraduate Stage', viewValue: 'Undergraduate Stage' },
    { value: 'Postgraduate Stage', viewValue: 'Postgraduate Stage' },
  ];

  constructor(
    private _formBuilder: FormBuilder,
    private _employeeService: EmployeeService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _dialogRef: MatDialogRef<EmpEditComponent>
  ) {
    this.employeeForm = this._formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      dateofbirth: '',
      gender: '',
      education: '',
      companyName: '',
      workingExperience: '',
      currentPackage: '',
    });
  }
  ngOnInit(): void {
    this.employeeForm.patchValue(this.data);
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      if (this.data) {
        this._employeeService
          .updateEmployeeData(this.data.id, this.employeeForm.value)
          .subscribe(
            (res) => {
              this._dialogRef.close(true);
            },
            (err) => {
              console.log(err);
            }
          );
      } else {
        this._employeeService.addEmployee(this.employeeForm.value).subscribe(
          (res) => {
            console.log(res);
            this._dialogRef.close(true);
          },
          (err) => {
            console.log(err);
          }
        );
      }
    }
  }
}
