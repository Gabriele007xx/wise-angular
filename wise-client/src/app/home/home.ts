import { Component } from '@angular/core';
import { Button } from '../button/button';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-home',
  imports: [Button],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
    token: String | null = null;
    id: number | null = null;
    constructor(private readonly authService: AuthService) {}

    ngOnInit() {
      console.log("Home component initialized",this.authService.isLoggedIn());
    };

}

