import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    const config = {
      apiKey: 'AIzaSyBeHwsjv7uFJRpgZWYoN4dhnJ4ntu_fFBY',
      authDomain: 'recipes-f17a8.firebaseapp.com',
      databaseURL: 'https://recipes-f17a8.firebaseio.com',
      projectId: 'recipes-f17a8',
      storageBucket: 'recipes-f17a8.appspot.com',
      messagingSenderId: '933068040336'
    };
    firebase.initializeApp(config);
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
