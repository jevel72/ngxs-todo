import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hotel-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
})
export class TechnologyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() library: string = '';
}
