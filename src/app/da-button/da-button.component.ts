import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Text } from '../text';
import { DaButtonService } from './da-button.service';
@Component({
  selector: 'app-da-button',
  templateUrl: './da-button.component.html',
  styleUrls: ['./da-button.component.css'],
  providers: [DaButtonService],
})

export class DaButtonComponent implements OnInit {

  text: Text = {
    text: "Hello little motherfucker",
  };

  constructor( private dService: DaButtonService) {}

  ngOnInit(): void {
    this.dService.getPais();
  }

}
