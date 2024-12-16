import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';
import { Project } from 'app/data/data';

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
  @Input({required:true})
  public project!: Project;
}
