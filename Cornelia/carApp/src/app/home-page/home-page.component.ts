import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {



  cars = [
    {
      name: 'Mercedes E-Klasse',
      img: 'mercedes.jpg',
      fuel: 'Diesel',
      klasse: 'Business',
      seats: '5'
    }, {
      name: 'Skoda Superb',
      img: 'skoda.jpg',
      fuel: 'Diesel',
      klasse: 'Business',
      seats: '5'
    }, {
      name: 'Toyota Avensis',
      img: 'toyota.jpg',
      fuel: 'Diesel',
      klasse: 'Middle class',
      seats: '5'
    }, {
      name: 'Nissan Micra',
      img: 'nissan.jpg',
      fuel: 'Diesel',
      klasse: 'Micro Car',
      seats: '4'
    }, {
      name: 'Nissan Micra',
      img: 'nissan.jpg',
      fuel: 'Diesel',
      klasse: 'Micro Car',
      seats: '4'
    }, {
      name: 'Nissan Micra',
      img: 'nissan.jpg',
      fuel: 'Diesel',
      klasse: 'Micro Car',
      seats: '4'
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
