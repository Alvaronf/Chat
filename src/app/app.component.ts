import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';

var config = {
  apiKey: "AIzaSyAZCh3l6CCI1L8PgVrjxDKtYqhiPMm6Xgo",
  authDomain: "chationicalvaro.firebaseapp.com",
  databaseURL: "https://chationicalvaro.firebaseio.com",
  projectId: "chationicalvaro",
  storageBucket: "",
  messagingSenderId: "475440931872"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

firebase.initializeApp(config);

  }
}

