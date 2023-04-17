import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-ordering-page',
  templateUrl: './ordering-page.component.html',
  styleUrls: ['./ordering-page.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate(500)
      ]),
      transition(':leave', [
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class OrderingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
