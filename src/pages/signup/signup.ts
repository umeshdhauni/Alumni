import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Http, Headers, RequestOptions } from '@angular/http';
import { TabsPage } from '../tabs/tabs';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  signupDetails={
    name:"",
    email:"",
    phoneno:"",
    password:"",
    batchStart:"",
    batchEnd:"",
  }; 
  constructor(public navCtrl: NavController, public navParams: NavParams,public menu: MenuController,public http: Http,public toastCtrl: ToastController) {

  }
  items=[1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,20013,2014,2015,2016,2017,2018];
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  signUp(value){
    console.log(value);
    var headers = new Headers();
    headers.append('content-type', 'application/json;charset=UTF-8');
    let options= new RequestOptions({headers: headers});
    var url = 'http://192.168.43.118:8080/register';
    let data = this.signupDetails;    
    this.http.post(url, data , options)
        .map(res=>res.json())
        .subscribe(
            res => {
              if(res.status=="registered"){
                  this.presentToast('User was added successfully')
                  this.navCtrl.setRoot(LoginPage);
              }
              else{
                  this.presentToast('Sorry try again')                
              }
            },
            err => {
              console.log("ERROR!: ", err);
            }
        );

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