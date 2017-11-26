import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicPage, Nav, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { MemoriesPage } from '../pages/memories/memories';
import { EventsPage } from '../pages/events/events';
import { SearchPage } from '../pages/search/search';
import { AddpostPage } from '../pages/addpost/addpost';


@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  rootPage:any = LoginPage;
  @ViewChild(Nav) nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  showMemoriesPage(){
  this.nav.push(MemoriesPage);
  }
  showEventsPage(){
  this.nav.push(EventsPage);
  }
  showNewpostPage(){
  this.nav.push(AddpostPage);
  }
  showSearchPage(){
  this.nav.push(SearchPage);
}
}
