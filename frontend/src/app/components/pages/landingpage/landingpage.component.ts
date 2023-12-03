import { Component } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {
  let popup= document.getElementById("popup");
  function openPopup(){
      popup.classList.add("open-popup")
  }
  function closePopup(){
      popup.classList.remove("open-popup")
  }
}
