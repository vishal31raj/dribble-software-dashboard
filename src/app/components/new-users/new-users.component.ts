import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.scss']
})
export class NewUsersComponent implements OnInit {
  @Input() newUsersData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
