import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IdService } from '../id.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  imports: [ReactiveFormsModule],
  templateUrl: './form-login.html',
  styleUrl: './form-login.scss',
})
export class FormLogin {

  constructor(private IdService: IdService,private readonly http: HttpClient,private readonly authService: AuthService,private readonly router:Router) {}
  email = new FormControl('');
  password = new FormControl('');

  async login()
  {
    //console.log(this.email.value);
     const formData = {
      email: this.email.value,
      password: this.password.value
     };
      this.http.post('http://localhost:1337/api/auth/login/', formData).subscribe({
          next: (data: any) => {
            alert('Login successful!');
                this.authService.setAccessToken(data.token);
                this.router.navigate(['/']);
          },
          error: (error) => {
            alert('Login failed: ' + error.error.message);
          }
        });

  }


  
}
