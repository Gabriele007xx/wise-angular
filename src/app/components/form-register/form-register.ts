import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-register',
  imports: [ReactiveFormsModule],
  templateUrl: './form-register.html',
  styleUrl: '../form-login/form-login.scss',
})
export class FormRegister {
  name = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');

  constructor(private readonly http : HttpClient, private readonly router: Router) {}
register() {
const userData = {
  name: this.name.value,
  email: this.email.value,
  password: this.password.value
}
this.http.post('http://localhost:1337/api/users/register/', userData).subscribe({
  next: (result: any) => {
    alert('Registration successful!');
    this.router.navigate(['/login'])
  },
  error: (error) => {
    alert('Registration failed: ' + error.error.message);
  }
});
}
}