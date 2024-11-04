import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NavComponentComponent } from '@shared/nav-component/nav-component.component';
import { Subject, takeUntil } from 'rxjs';
import { AboutComponent } from './components/about/about.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, NavComponentComponent, AboutComponent],
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
