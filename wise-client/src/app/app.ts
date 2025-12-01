import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toolbar } from './toolbar/toolbar';
import { Footer } from './footer/footer';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [Footer, Toolbar, Footer, Home, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('wise');
}
