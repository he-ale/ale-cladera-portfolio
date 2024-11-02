import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-component',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './nav-component.component.html',
  styles: ``
})
export class NavComponentComponent {

  isMenuHidden = true; 
  bgColor: string=  "bg-white/75";

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.bgColor = window.scrollY > 50 ? 'bg-white border-b-[1px] border-black' : 'bg-white/75';
  }

  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }
}
