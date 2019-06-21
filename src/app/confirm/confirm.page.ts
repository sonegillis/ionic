import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {
  name;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    alert("hello");
    this.name = this.route.snapshot.paramMap.get("name");
  }

}
