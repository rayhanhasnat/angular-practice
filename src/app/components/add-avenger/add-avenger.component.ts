import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Avenger } from 'src/app/models/avenger';
import { AvengerService } from 'src/app/services/avenger.service';

@Component({
  selector: 'app-add-avenger',
  templateUrl: './add-avenger.component.html',
  styleUrls: ['./add-avenger.component.scss']
})
export class AddAvengerComponent implements OnInit {

  @Output() onSave:EventEmitter<number> = new EventEmitter();

  avenger: Avenger = {
    superheroName: '',
    realName: '',
    weapons: '',
    canFly: false,
    imageUrl: ''
  }

  constructor(private _avengerService: AvengerService) { }

  ngOnInit(): void {
  }

  async save() {
    let newAvenger:any = await this._avengerService.insert(this.avenger);
    this.onSave.emit(newAvenger.id);
  }

}
