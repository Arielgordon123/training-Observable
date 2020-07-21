import { Component, Input, OnInit } from '@angular/core';
import { Flag } from '../Model/flag';

@Component({
  selector: 'flag-component',
  templateUrl: './flag-component.component.html',
  styleUrls: ['./flag-component.component.scss']
})
export class FlagComponentComponent implements OnInit {

  @Input() flag:Flag;
  constructor() { }

  ngOnInit(): void {
  }

}
