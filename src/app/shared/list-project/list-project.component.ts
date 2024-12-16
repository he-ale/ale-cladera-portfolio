import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardProjectComponent } from "../card-project/card-project.component";
import { Project, projects } from 'app/data/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'list-project',
  standalone: true,
  imports: [CardProjectComponent, CommonModule],
  templateUrl: './list-project.component.html',
  styleUrl: './list-project.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host:{
    class: 'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3',
  }
})
export class ListProjectComponent {
  public projects:Project[];
  constructor(){
    this.projects= projects;
  }
}
