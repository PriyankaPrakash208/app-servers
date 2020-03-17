import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',//as an attribute

  // selector: '[app-servers]',//as an attribute
  // selector: '.app-servers',//as a class
  // template:'<app-server></app-server>',
  templateUrl:'servers.component.html',
  styles:[`.hide{display:none;}
           .textwhite{color:white;}
          `]
  // styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = true;
  serverCreatedStatus = "No server was created!";
  serverName = "";
  username   = "";
  serverCreated = false;
  servers = ["server1","server 2"];
  showSecret = false;
  clickCountArray = [];


  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 4000);
  }

  ngOnInit(): void {
  }

  onServerCreation(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreatedStatus = "Server was created! Name is "+this.serverName;
  }

  onUpdateServerName(event:Event){
    console.log(event);
    // this.serverName = event.target.value; //doubt why not?
    this.serverName = (<HTMLInputElement>event.target).value; //doubt why html input elemnt?
  }

  onTogglerClick(){
    this.showSecret = !this.showSecret;
    // this.clickCountArray.push(this.clickCountArray.length + 1);
    this.clickCountArray.push(new Date());

    console.log(this.clickCountArray);
  }

  getCountColor(clickcounts: number){
    return clickcounts >= 5 ? "blue" : "";
  }

  

  

}
