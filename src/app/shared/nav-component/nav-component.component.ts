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

  public isMenuHidden: boolean; 
  public bgColor: string;


  public constructor(){
    this.isMenuHidden = true; 
    this.bgColor=  "bg-white/75";
  }

  @HostListener('window:scroll', [])
  public onWindowScroll(): void {
    this.bgColor = window.scrollY > 50 ? 'bg-white border-b-[1px] border-black' : 'bg-white/75';
  }

  public toggleMenu(): void{
    this.isMenuHidden = !this.isMenuHidden;
  }
}
