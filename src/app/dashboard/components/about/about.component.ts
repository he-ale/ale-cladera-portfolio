import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  // images: string[] = [
  //   'cartoon-workaholic-8828808_1280.jpg',
  //   'background.jpg',
  // ];
  // currentImageIndex: number = 0;

  constructor() {
    // this.startImageTransition();
  }

  // startImageTransition() {
  //   setInterval(() => {
  //     this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  //   }, 3000); // Cambiar cada 3 segundos
  // }
}