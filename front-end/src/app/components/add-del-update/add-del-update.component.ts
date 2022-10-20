import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersServiceService } from '../../services/users-service.service';

@Component({
  selector: 'app-add-del-update',
  templateUrl: './add-del-update.component.html',
  styleUrls: ['./add-del-update.component.css']
})
export class AddDelUpdateComponent implements OnInit {

  userAddForm!: FormGroup;
  userDeleteForm!: FormGroup;
  userUpdateForm!: FormGroup;
  users: any;

  constructor(
    public usersService: UsersServiceService,
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.userAddForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.userDeleteForm = this.fb.group({
      id: ['', Validators.required]
    });

    this.userUpdateForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  add(): void {
    this.usersService.addUser(this.userAddForm.value)
    .subscribe(
      response => {
      console.log(response);
      this.userAddForm.reset();
      this.userAddForm.setErrors(null);

    },
      error => { console.error(error) }
    )
  }

  delete(): void {
    this.usersService.deleteUser(this.userDeleteForm.value.id)
    .subscribe(
      response => {
      console.log(response);
      this.userDeleteForm.reset();
      this.userDeleteForm.setErrors(null);
    },
      error => {
      console.log(error)
  })
  }

  update(): void {
    this.usersService.updateUser(this.userUpdateForm.value.id, this.userUpdateForm.value)
    .subscribe(
      respose => {
        console.log(respose)
        this.userDeleteForm.reset();
        this.userDeleteForm.setErrors(null);
      },
      error => {
        console.log(error)
      }
    )
  }
}
