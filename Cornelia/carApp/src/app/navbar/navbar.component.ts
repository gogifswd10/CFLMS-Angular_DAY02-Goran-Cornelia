import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  donationCounter = 10;
  constructor() { }
  countDonations() {
    this.donationCounter += 10;
  }
  ngOnInit() {
  }

}
