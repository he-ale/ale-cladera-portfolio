import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponentComponent } from '@shared/nav-component/nav-component.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, NavComponentComponent],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export class DashboardComponent {

}
