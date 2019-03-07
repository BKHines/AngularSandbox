import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styles: []
})
export class RefreshComponent implements OnInit {
  routerParam: number;
  sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.routerParam = params['id'];
      this.showAlert();
    });
  }

  showAlert() {
    alert(`Just checking: ${this.routerParam}`);
  }
}
