import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-component',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './nav.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: "relative z-20",
    '(window:scroll)': 'onWindowScroll()',
  }
})
export class NavComponent {

  public isMenuHidden: boolean; 
  public bgColor: string;


  public constructor(){
    this.isMenuHidden = true; 
    this.bgColor=  "bg-white/75";
  }

  // @HostListener('window:scroll', [])
  public onWindowScroll(): void {
    this.bgColor = window.scrollY > 50 ? 'bg-white border-b-[1px] border-black' : 'bg-white/75';
  }

  public toggleMenu(): void{
    this.isMenuHidden = !this.isMenuHidden;
  }
}
