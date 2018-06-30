import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   w3_open() {
    // Toggle between showing and hiding the sidebar when clicking the menu icon
    var mySidebar = document.getElementById("mySidebar");

      if (mySidebar.style.display === 'block') {
          mySidebar.style.display = 'none';
      } else {
          mySidebar.style.display = 'block';
      }
  }
}
