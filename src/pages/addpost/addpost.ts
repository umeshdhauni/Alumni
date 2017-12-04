import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import {DomSanitizer} from '@angular/platform-browser';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Events } from 'ionic-angular';


/**
 * Generated class for the AddpostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addpost',
  templateUrl: 'addpost.html',
})
export class AddpostPage {
  base64Image:any;
  postContent:any;
  url:any;
  user={};
  constructor(public navCtrl: NavController, public navParams: NavParams,public camera:Camera, public _DomSanitizer: DomSanitizer,private transfer: FileTransfer,public http: Http,public events: Events 
) {
  events.subscribe('user:created', (detail, time) => {
      // detail and time are the same arguments passed in `events.publish(detail, time)`
      this.user=detail;
  })
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddpostPage');
  }
  accessGallery(){
   this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      mediaType:this.camera.MediaType.PICTURE,
      destinationType:this.camera.DestinationType.FILE_URI,
      quality:50, 
    }).then((imageData) => {
      this.base64Image = imageData;
     }, (err) => {
      console.log(err);
    });
  }
  accessCamera(){
    this.camera.getPicture({
       sourceType:this.camera.PictureSourceType.CAMERA,
      }).then((imageData) => {
        this.base64Image =imageData;

    },
    (err) => {
       console.log(err);
       //This could also be triggered when the user presses the cancel button.
    });
  }

  postData(){
      const fileTransfer: FileTransferObject = this.transfer.create();
      let options: FileUploadOptions = {
        fileKey: 'post',
        fileName: this.base64Image.substring(this.base64Image.lastIndexOf('/')+1,this.base64Image.lastIndexOf('?')),
        headers: {}
      }
      this.url='http://192.168.43.118:8080/newpost';
      fileTransfer.upload(this.base64Image, this.url, options)
      .then((data) => {
        console.log("data is posted");
      }, (err) => {
        console.log("error");
      })

      var headers = new Headers();
      headers.append('content-type', 'application/json;charset=UTF-8');
      let detailoptions= new RequestOptions({headers: headers});
      var url = 'http://192.168.43.118:8080/newpost';
      let data = {
      postContent:this.postContent,
      user:this.user,
      };    
      this.http.post(url, data , detailoptions)
          .map(res=>res.json())
          .subscribe(
              res => {
              console.log("posted");
              },
              err => {
                console.log("ERROR!: ", err);
              }
          );
  }

}
