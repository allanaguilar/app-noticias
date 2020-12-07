import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @ViewChild(IonSegment) segment: IonSegment;

  categorias: string[] = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ];
  segmentoPorDefecto = '';

  constructor() { }

  ngOnInit() {
    this.segmentoPorDefecto = this.categorias[0];
    // this.segment.value = this.categorias[0];
  }

}
