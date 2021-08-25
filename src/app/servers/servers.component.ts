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
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'testServer';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = (`Server ${this.serverName.toUpperCase()} was created!`);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
