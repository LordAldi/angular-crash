import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';

  constructor() {}

  ngOnInit(): void {}

  toggleAddTask = () => {
    console.log('toggle');
  };
}
