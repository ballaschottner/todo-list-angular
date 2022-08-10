import { Component } from '@angular/core';
import { TodoItem } from './interfaces/todo-item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Tuh.do app';
}
