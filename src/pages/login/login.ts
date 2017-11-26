import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import {SignupPage} from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public menu: MenuController) {
    this.menuDisable();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  showSignupPage() {
    this.navCtrl.push(SignupPage);
  }
  showlogin() {
    this.navCtrl.push(TabsPage);
  }
  menuDisable(){
    this.menu.swipeEnable(false);
  }
}
