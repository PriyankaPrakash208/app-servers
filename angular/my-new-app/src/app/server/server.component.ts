import { Component } from '@angular/core';

@Component({
    selector:"app-server",
    templateUrl:"./server.component.html",
    styles:[`
    .online{color:white;}
    
    `]
})

export class serverComponent {
    serverId:number = 10;
    serverStatus:string = "Offline";


    constructor(){
        this.serverStatus = Math.random() > 0.5 ? this.serverStatus = "online" : "offline";
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getcolor(){
        return this.serverStatus === "online" ? "green" : "red";
    }
}

