import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'shop01';
  constructor() {}

  ngOnInit(): void {
    setTimeout(
      () =>
        alert(
          'API được deploy ở Heroku, do dùng Hosting miễn phí nên sau 30 phút không có request gửi tới nó sẽ sleep! Vui lòng đợi 30 giây đến 1 phút nhé|'
        ),
      1000
    );
  }
}
