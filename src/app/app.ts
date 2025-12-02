import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Toolbar } from './components/toolbar/toolbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Footer,Toolbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('wise');
}
