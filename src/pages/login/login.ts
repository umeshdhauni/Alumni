import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import {SignupPage} from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Events } from 'ionic-angular';

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
  email:any;
  password:any;
  detail={
    name:"",
    type:"",
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,public menu: MenuController,public http:Http,public toastCtrl: ToastController,public events: Events) {
    this.menuDisable();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  showSignupPage() {
    this.navCtrl.push(SignupPage);
  }
  showlogin() {    
     var headers = new Headers();
    headers.append('content-type', 'application/json;charset=UTF-8');
    let options= new RequestOptions({headers: headers});
    var url = 'http://192.168.43.118:8080/login';
    let data={
      email:this.email,
      password:this.password,
    }    
    this.http.post(url, data , options)
        .map(res=>res.json())
        .subscribe(
            res => {
              if(res.status=="loggedin"){
                this.detail.name=res.name;
                this.detail.type=res.type;
                console.log(this.detail);
                this.events.publish('user:created', this.detail, Date.now());
                this.presentToast('Login Successfully')                
                this.navCtrl.setRoot(TabsPage);  
              }
              else{
                this.presentToast('Sorry try again');                

              }
            },
            err => {
              console.log("ERROR!: ", err);
            }
        );
    
  }
  menuDisable(){
    this.menu.swipeEnable(false);
  }
  presentToast(msg:string) {
      let toast = this.toastCtrl.create({
        message: msg,
        duration: 3000,
        position: 'top'
      });

      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });

      toast.present();
      }
}
