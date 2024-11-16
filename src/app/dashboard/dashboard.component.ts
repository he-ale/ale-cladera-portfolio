import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NavComponent } from '@shared/nav-component/nav.component';
import { Subject, takeUntil } from 'rxjs';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from "../shared/footer-component/footer.component";
import { ProjectsComponent } from "./components/projects/projects.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, NavComponent, AboutComponent, FooterComponent, ProjectsComponent],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export class DashboardComponent implements OnInit, OnDestroy{
  private route: ActivatedRoute;
  private destory$: Subject<void>;

  public constructor(){
    this.route= inject(ActivatedRoute);
    this.destory$= new Subject<void>;
  }

  public ngOnInit(): void {
    this.route.fragment.pipe(takeUntil(this.destory$)).subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  public ngOnDestroy(): void {
      this.destory$.next();
      this.destory$.complete();
  }

}
