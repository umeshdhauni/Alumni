import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostsPage } from '../pages/posts/posts';
import { MembersPage } from '../pages/members/members';
import { HomePage } from '../pages/home/home';
import { StatusPage } from '../pages/status/status';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { MemoriesPage } from '../pages/memories/memories';
import { EventsPage } from '../pages/events/events';
import { SearchPage } from '../pages/search/search';
import { AddpostPage } from '../pages/addpost/addpost';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    PostsPage,
    MembersPage,
    StatusPage,
    LoginPage,
    SignupPage,    
    HomePage,
    TabsPage,
    MemoriesPage,
    EventsPage,
    SearchPage,
    AddpostPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PostsPage,
    MembersPage,
    StatusPage,
    LoginPage,
    SignupPage,                
    HomePage,
    TabsPage,
    MemoriesPage,
    EventsPage,
    SearchPage,
    AddpostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
