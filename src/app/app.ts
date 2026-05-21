import { Component } from '@angular/core';
import { environment } from '@environments';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected _title = environment.apiUrl;
}
