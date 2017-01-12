import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  items: ListItem[] = [];
  mockData1: ListItem[] = [
    { V: "CH", D: "Schweiz" },
    { V: "DE", D: "Deutschland" },
    { V: "VN", D: "Vietnam" }
  ];
  mockData2: ListItem[] = [
    { V: "CH", D: "Schweiz" },
    { V: "DE", D: "Deutschland" },
    { V: "VN", D: "Vietnam" },
    { V: "US", D: "USA" }
  ];
  model: string;

  constructor(
    private http: Http
  ) {

  }

  load1() {
    console.log("list 1 loaded");
    this.items.length = 0;
    for (let item of this.mockData1) {
      this.items.push(item);
    }
  }

  load2() {
    console.log("list 2 loaded");
    this.items.length = 0;
    for (let item of this.mockData2) {
      this.items.push(item);
    }
  }

  ngOnInit(): void {
    this.load1();
  }
}

export class ListResponse {
  Data: ListItem[];
  AdditionalData: ListItem[];
}

export class ListItem {
  D: string;
  V: string;
}