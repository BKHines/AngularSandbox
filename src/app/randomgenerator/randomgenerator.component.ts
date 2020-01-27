import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { IName, SquarenamesService } from '../shared/services/squarenames.service';

interface ISquare {
  square: number;
  afc: number;
  nfc: number;
}

@Component({
  selector: 'app-randomgenerator',
  templateUrl: './randomgenerator.component.html',
  styleUrls: ['./randomgenerator.component.css']
})
export class RandomgeneratorComponent implements OnInit {
  names: IName[];
  squares: ISquare[];
  canBeRandomized: boolean;

  squareNumbers: number[];

  private http: HttpClient;

  constructor(handler: HttpBackend, private squareNamesSvc: SquarenamesService) {
    this.http = new HttpClient(handler);
  }

  ngOnInit() {
    this.squareNumbers = [];
    // this.http.get('./assets/names.json').subscribe((res: IName[]) => {
    this.squareNamesSvc.getSquareNames().subscribe((res: IName[]) => {
      this.names = res;

      if (this.names.every(a => !a.numbersdelivered)) {
        this.canBeRandomized = true;
      }
    });
  }

  randomize() {
    this.names.forEach((a, idx) => {
      this.squareNumbers.push(idx + 1);
    });

    this.names.forEach((a) => {
      const _randomNumber = Math.floor(Math.random() * this.squareNumbers.length);
      // console.log(`Random number: ${_randomNumber}`);

      const _squarenumber = this.squareNumbers[_randomNumber];
      // console.log(`Square number: ${_squarenumber}`);

      a.square = _squarenumber;

      this.squareNumbers.splice(_randomNumber, 1);

      a.message = '';
      a.numbersdelivered = false;
    });

    this.names.sort((a, b) => a.square - b.square);

    this.saveSquares();
  }

  setMessage(squareNumber: number, sendEmail: boolean) {
    if (!this.squares || this.squares.length === 0) {
      this.http.get('./assets/squares.json').subscribe((res: ISquare[]) => {
        this.squares = res;
        this.setMessageWork(squareNumber, sendEmail);
      });
    } else {
      this.setMessageWork(squareNumber, sendEmail);
    }
  }

  setMessageWork(squareNumber: number, sendEmail: boolean) {
    const emailmessage: { msg: string, prefix?: string, suffix?: string }[] = [];
    const shareLink = 'https://docs.google.com/spreadsheets/d/1Ca_bHVcmRO-Yt6Y1es8aa3a3UMv4OqqNcqjhS5A8DHo?usp=sharing';
    const emailtab = '%20%20%20%20';

    const _name = this.names.find(a => a.square === squareNumber);
    const names = this.names.filter(a => a.name === _name.name);
    emailmessage.push({ msg: `Hey ${_name.name.split(' ')[0]},` });
    emailmessage.push({ msg: '' });
    // tslint:disable-next-line:max-line-length
    emailmessage.push({ msg: `Thank you again so much for helping me raise money to send Tyler to study abroad this summer.  I can't even begin to thank you for your support.  Here are a reminder of the rules, a link to the board (to print) and your numbers.  Best of luck to everyone and thanks again!` });
    emailmessage.push({ msg: '' });
    emailmessage.push({ msg: 'Rules:', prefix: sendEmail ? '' : '<strong>', suffix: sendEmail ? '' : '</strong>' });
    // tslint:disable-next-line:max-line-length
    emailmessage.push({ msg: 'If your combination of numbers match the last numbers of the score at the end of the 1st, 2nd or 3rd quarter or the final score (4th quarter or OT), you win!', prefix: sendEmail ? emailtab : '<span class="tabbed">', suffix: sendEmail ? '' : '</span>' });
    // tslint:disable-next-line:max-line-length
    emailmessage.push({ msg: 'If a square comes up more than once, the owner of the square wins each time', prefix: sendEmail ? emailtab : '<span class="tabbed">', suffix: sendEmail ? '' : '</span>' });
    emailmessage.push({ msg: `$500 goes to winners, $500 goes to Tyler's Study Abroad Fund`, prefix: sendEmail ? emailtab : '<span class="tabbed">', suffix: sendEmail ? '' : '</span>' });
    emailmessage.push({ msg: '' });
    emailmessage.push({ msg: 'Payouts:', prefix: sendEmail ? '' : '<strong>', suffix: sendEmail ? '' : '</strong>' });
    emailmessage.push({ msg: '1st quarter - $100', prefix: sendEmail ? emailtab : '<span class="tabbed">', suffix: sendEmail ? '' : '</span>' });
    emailmessage.push({ msg: '2nd quarter - $100', prefix: sendEmail ? emailtab : '<span class="tabbed">', suffix: sendEmail ? '' : '</span>' });
    emailmessage.push({ msg: '3rd quarter - $100', prefix: sendEmail ? emailtab : '<span class="tabbed">', suffix: sendEmail ? '' : '</span>' });
    emailmessage.push({ msg: 'Final Score - $200', prefix: sendEmail ? emailtab : '<span class="tabbed">', suffix: sendEmail ? '' : '</span>' });
    emailmessage.push({ msg: '' });
    emailmessage.push({ msg: 'Your Numbers:', prefix: sendEmail ? '' : '<strong>', suffix: sendEmail ? '' : '</strong>' });
    names.forEach((n) => {
      const _square = this.squares.find(a => a.square === n.square);
      const _emailMessage = `AFC: ${_square.afc}, NFC: ${_square.nfc}`;
      emailmessage.push({ msg: _emailMessage, prefix: sendEmail ? emailtab : '<span class="tabbed">', suffix: sendEmail ? '' : '</span>' });
    });
    emailmessage.push({ msg: '' });
    emailmessage.push({ msg: 'Football Squares Board:', prefix: sendEmail ? '' : '<strong>', suffix: sendEmail ? '' : '</strong>' });
    emailmessage.push({ msg: shareLink, prefix: sendEmail ? emailtab : `<a href="${shareLink}" target="_blank">`, suffix: sendEmail ? '' : '</a>' });

    if (sendEmail) {
      let _url = `mailto:${_name.email}?subject=Football Squares&body=${emailmessage.join('%0A')}`;
      _url = `https://mail.google.com/mail/?view=cm&fs=1&to=${_name.email}&su=Football Squares&body=${emailmessage.map(a => {
        if (a.prefix) {
          return `${a.prefix}${a.msg}${a.suffix}`;
        } else {
          return `${a.msg}`;
        }
      }).join('%0A')}`;
      this.saveSquares();
      window.open(_url, '_blank');
    } else {
      if (_name.message) {
        _name.message = '';
      } else {
        _name.message = emailmessage.map(a => {
          if (a.prefix) {
            return `${a.prefix}${a.msg}${a.suffix}`;
          } else {
            return `${a.msg}`;
          }
        }).join('<br />');

        this.saveSquares();
        setTimeout(() => {
          const _message = document.getElementById('message' + squareNumber);
          if (_message) {
            this.copyMessage(_message.innerText);
          }
        }, 300);
      }
    }
  }

  copyNames() {
    navigator.clipboard.writeText(this.names.map(a => `${a.name},`).join(''));
  }

  copyMessage(msg: string) {
    navigator.clipboard.writeText(msg);
  }

  updateAllNames(numbersdelivered: any, name: string) {
    this.names.filter(a => a.name === name).forEach((a) => {
      a.numbersdelivered = numbersdelivered;
    });

    this.canBeRandomized = !this.names.some(a => a.numbersdelivered);

    this.saveSquares();
  }

  saveSquares() {
    this.squareNamesSvc.saveNewSquareNames(this.names).subscribe();
  }
}
