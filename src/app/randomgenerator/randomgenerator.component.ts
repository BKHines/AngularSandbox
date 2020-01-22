import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-randomgenerator',
  templateUrl: './randomgenerator.component.html',
  styleUrls: ['./randomgenerator.component.css']
})
export class RandomgeneratorComponent implements OnInit {
  names: { name: string, square: number }[] = [
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
    { name: 'Brian Hines', square: 0 },
  ];

  squares: number[];

  constructor() { }

  ngOnInit() {
    this.squares = [];
    this.names.forEach((a, idx) => {
      this.squares.push(idx + 1);
    });
    console.log(this.squares);

    this.names.forEach((a) => {
      const _randomNumber = Math.floor(Math.random() * this.squares.length);
      // console.log(`Random number: ${_randomNumber}`);

      const _squarenumber = this.squares[_randomNumber];
      // console.log(`Square number: ${_squarenumber}`);

      a.square = _squarenumber;
      console.log(`Square Number: ${_squarenumber}`);

      this.squares.splice(_randomNumber, 1);
      console.log(this.squares);
    });

    this.names.sort((a, b) => a.square - b.square);
  }

}
