import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'card-project',
  standalone: true,
  imports: [],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host:{
    class: 'shadow-1xl relative',
  }
})
export class CardProjectComponent {

}
