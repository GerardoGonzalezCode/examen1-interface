import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../message';
import { Text } from '../text';
import { DaButtonService } from './da-button.service';
@Component({
  selector: 'app-da-button',
  templateUrl: './da-button.component.html',
  styleUrls: ['./da-button.component.css'],
  providers: [DaButtonService],
})

export class DaButtonComponent implements OnInit {
  messagen = "";
  emotion:any = [];
  constructor( private dService: DaButtonService) {}

  ngOnInit(): void {
    
  }

  addMessage(){
    console.log(this.messagen);
    this.dService.addText({text: this.messagen}).subscribe(res => {
      this.emotion = res;
      console.log(this.emotion);
      console.log(res);
    })
  }
}
