import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Avenger } from 'src/app/models/avenger';
import { AvengerService } from 'src/app/services/avenger.service';

@Component({
  selector: 'app-avenger',
  templateUrl: './avenger.component.html',
  styleUrls: ['./avenger.component.scss']
})
export class AvengerComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private avengerService:AvengerService
  ) { }

  id:any = null;

  avenger: Avenger = {
    superheroName: '',
    realName: '',
    weapons: '',
    canFly: false,
    imageUrl: ''
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getAvenger();
  }

  async getAvenger() {
    let avengers:any = await this.avengerService.get(this.id);
    this.avenger = avengers;
  }

}
