import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListProjectComponent } from "../../../shared/list-project/list-project.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ListProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host:{
    class:'container max-w-screen-xl mx-auto px-4',
    id: 'projects',
  }
})
export class ProjectsComponent {

}
