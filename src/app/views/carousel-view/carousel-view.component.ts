import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-view',
  templateUrl: './carousel-view.component.html',
  styleUrls: ['./carousel-view.component.css']
})
export class CarouselViewComponent implements OnInit {

  
  carouselCaptions = [];
  carouselItems = [];
  constructor() {
    let title = 'sample-proj';
    this.carouselCaptions = [
      { "mainHeader": "UNLOCK THE POTENTIAL DATA SCIENCE", "subHeader": "Our Strategy","body": "Organisations are amazingly vast volumes of data from online transactions, connected devices and people. This data holds many insights about your operations, performance, customers and competitors, but few organisations have really unlocked this potential." },
      { "mainHeader": "Giving IT Infrastructure A Digital Upgrade", "subHeader": "Our Strategy1","body": "Digitalization is fundamentally changing how businesses operate and thrive. Automation and cloud technologies are no longer optional but are core components of any business transformation project. " },
    ];
    this.carouselItems = [
      {"imageSource": "https://lh3.googleusercontent.com/-vP3I2A6OEaE/Xa8QCVA2jrI/AAAAAAAAm8c/Va7T2U_jp5suLAMzLSOuZFD2vffG5K_PwCK8BGAsYHg/s0/2019-10-22.png", "isActive": true},
      {"imageSource": "https://lh3.googleusercontent.com/-UpTRIsxaRwk/Xa8QIA-vf9I/AAAAAAAAm8o/Cg6OXX14iT09mBQ6E8zVPtnBPLnO3-kqgCK8BGAsYHg/s0/2019-10-22.png", "isActive": false},
      {"imageSource": "https://lh3.googleusercontent.com/-LgU3rII9T4I/Xa8QEFg3LXI/AAAAAAAAm8g/zFJU4KtkMKoWpPnaJnsJ5OO86YspQXohwCK8BGAsYHg/s0/2019-10-22.png", "isActive": false},
      {"imageSource": "https://lh3.googleusercontent.com/-GyVNSLeZqpA/Xa8QGTNe6rI/AAAAAAAAm8k/WaPFmBZB1zkfRDFaLqDAGEi9CIwKItwHACK8BGAsYHg/s0/2019-10-22.png", "isActive": false}
    ];

  }

  ngOnInit() {
  }

}
