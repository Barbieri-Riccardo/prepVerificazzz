import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component } from '@angular/core';
import { Email } from 'src/email/mail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'email-barbieri';
  vettMail : Email[]=[];
  invia(destinatario:HTMLInputElement,oggetto:HTMLInputElement,messaggio:HTMLInputElement):boolean{
    console.log(destinatario.value + " " + oggetto.value + " " + messaggio.value);
    let e = new Email(destinatario.value, oggetto.value, messaggio.value);
    this.vettMail.push(e);
    console.log(this.vettMail)
    return false;
  }
}

