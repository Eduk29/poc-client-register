import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.scss']
})
export class MastheadComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;

  constructor(private router: Router) { }

  ngOnInit() {
    // if (this.router.url === '/home') {
    //   this.title = "Client Register POC"
    //   this.subtitle = "An Angular Project"
    // }
  }

}
