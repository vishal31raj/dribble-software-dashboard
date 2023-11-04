import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  navIcons = [
    {
      id: 1,
      icon: 'fa-dropbox',
      isActive: false,
    },
    {
      id: 2,
      icon: 'fa-bar-chart',
      isActive: false,
    },
    {
      id: 3,
      icon: 'fa-plus-square',
      isActive: true,
    },
    {
      id: 4,
      icon: 'fa-check-square-o',
      isActive: false,
    },
    {
      id: 5,
      icon: 'fa-cog',
      isActive: false,
    },
    {
      id: 6,
      icon: 'fa-download',
      isActive: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
