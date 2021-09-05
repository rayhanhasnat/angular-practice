import { Component, Input, OnInit } from '@angular/core';
import { Avenger } from 'src/app/models/avenger';
import { AvengerService } from 'src/app/services/avenger.service';

@Component({
  selector: 'app-avenger-list',
  templateUrl: './avenger-list.component.html',
  styleUrls: ['./avenger-list.component.scss']
})
export class AvengerListComponent implements OnInit {

  @Input() newId:number = 0;

  avengers: Avenger[] = [];
  constructor(
    private _avengerService: AvengerService
  ) { }

  ngOnInit(): void {
    this.getAvengers();
  }

  ngOnChanges(): void {
    this.getAvengers();
  }

  async getAvengers() {
    this.avengers = await this._avengerService.get();
  }

}
