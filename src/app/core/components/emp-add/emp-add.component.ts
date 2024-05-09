import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpEditComponent } from '../emp-edit/emp-edit.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrl: './emp-add.component.css',
})
export class EmpAddComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'dateofbirth',
    'gender',
    'education',
    'companyName',
    'workingExperience',
    'currentPackage',
    'action',
  ];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialogue: MatDialog,
    private _employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.getEmployeeList();
  }

  openAddEditEmpForm() {
    const DialogRef = this._dialogue.open(EmpEditComponent);
    DialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this.getEmployeeList();
      }
    });
  }

  getEmployeeList() {
    this._employeeService.getEmployees().subscribe(
      (res) => {
        // console.log('employees found', res);
        this.dataSource = new MatTableDataSource(res);
        // this.dataSource.sort = this.sort;
        // this.dataSource.paginator = this.paginator;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  openEditEmployeeForm(data: any) {
    const dialogRef = this._dialogue.open(EmpEditComponent, {
      data: data,
    });
    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this.getEmployeeList();
      }
    });
  }
}
