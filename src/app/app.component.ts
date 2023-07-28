import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./../styles.css']
})
export class AppComponent {
  title = 'landing';
  menuBar = false;
  menuOpen(){
    this.menuBar = true;
  }
  closeMenuBar(){
    this.menuBar = false;
  }
}
