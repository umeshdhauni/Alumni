import { Component } from '@angular/core';

import { PostsPage } from '../posts/posts';
import { MembersPage } from '../members/members';
import { HomePage } from '../home/home';
import { StatusPage } from '../status/status';
import { MenuController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PostsPage;
  tab2Root = MembersPage;
  tab3Root = StatusPage;
  constructor(public menu:MenuController) {
    this.menuEnable();
  }
  menuEnable(){
    this.menu.swipeEnable(true);
  }
}
