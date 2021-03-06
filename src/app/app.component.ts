import { LoginPage } from './../pages/login/login';
import { AuthServiceProvider } from './../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //removed the assignment from rooPage
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, authService: AuthServiceProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      //Listen for change in authentication state
    const unsubscribe = authService.userAuthState.onAuthStateChanged(user =>{
      if(!user) {
        this.rootPage = LoginPage;
        unsubscribe();
      } else {
        this.rootPage = TabsPage;
        unsubscribe();
      }
    });
    
    });

  }
}
