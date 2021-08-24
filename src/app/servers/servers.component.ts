import { Component, OnInit } from '@angular/core';

@Component({  
  selector: 'app-servers',
  // write selector by attribute:
  // selector: '[app-servers]',
  // write selector by class:
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
