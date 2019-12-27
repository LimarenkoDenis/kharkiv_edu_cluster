import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent{
  statistics: Observable<any>;

  constructor(db: AngularFireDatabase) {
    this.statistics = db.list('CONTENT').valueChanges().pipe(
      map((items) => items[1])
    );
  }
}
