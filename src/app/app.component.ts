import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'HelloWorld';
  imgUrl = "";
  url = ""
  userName: string = "";
  nameError: string = "";

  ngOnInit(): void {
    this.title = "Hello From Angular 9";
    this.imgUrl = "../assets/logo.png";
    this.url = "https://www.Google.com";
  }

  onClick($event) {
    window.open(this.url, "_blank");
  }

  onInput($event) {
    console.log("Change Event" + $event.data);
    const nameRegex = RegExp('^[A-Z}{1}[a-zA-Z\\s]{2,}$');
    if (nameRegex.test(this.userName)) {
      this.nameError = "";
      return;
    }
    this.nameError = "Name is Incorrect!!";
  }
}
