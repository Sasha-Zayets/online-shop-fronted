import { Component } from '@angular/core';

type ListMenuItem = {
  link: string;
  icon: string;
  name: string;
}

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class Sidebar {
  listMenu: ListMenuItem[] = [
    { link: 'home', icon: 'home', name: 'Home' },
    { link: 'products', icon: 'density_small', name: 'Products' },
    { link: 'categories', icon: 'category', name: 'Categories' },
    { link: 'orders', icon: 'money', name: 'Orders' },
    { link: 'users', icon: 'group', name: 'Users' },
  ];
}
