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
import { MenuController } from 'ionic-angular';
import { Events } from 'ionic-angular';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  rootPage:any = LoginPage;
  user={};
  @ViewChild(Nav) nav;
  public warnedExit;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public menu: MenuController,public events: Events ) {
      events.subscribe('user:created', (detail, time) => {
      // detail and time are the same arguments passed in `events.publish(detail, time)`
      console.log('Welcome', detail, 'at', time);
      this.user=detail;
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      platform.registerBackButtonAction(() => {
                if (this.menu.isOpen()) {
                    this.menu.close();
                    console.log('isopen')
                } else if (this.nav.canGoBack()) {
                    this.nav.pop();
                    console.log('pop')
                } else {
                    if (this.nav.getActive() && this.nav.getActive().name !== 'TabsPage' && this.nav.getActive().name !== 'LoginPage') {
                        this.nav.setRoot(TabsPage, {}, { animate: true })
                        console.log('set tabspage')
                        console.log(this.nav.getActive)
                    } else if (!this.warnedExit) {
                        console.log('3 second ki warning')
                        this.warnedExit = true;
                        setTimeout(() => {
                            this.warnedExit = false;
                            console.log('3 sec poore hue')
                        }, 3000)
                    } else {
                        platform.exitApp();
                    }
                }
            });
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  showMemoriesPage(){
    console.log('memory')
  this.nav.setRoot(MemoriesPage);
  this.menu.close();
  }
  showEventsPage(){
  this.nav.setRoot(EventsPage);
  this.menu.close();
  }
  showNewpostPage(){
  this.nav.setRoot(AddpostPage);
  this.menu.close();
  
  }
  showSearchPage(){
  this.nav.setRoot(SearchPage);
  this.menu.close();
}

}
