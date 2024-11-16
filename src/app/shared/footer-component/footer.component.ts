import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host:{
    class: 'container h-fit min-w-full bg-gray-500 text-white flex flex-row-reverse'
  }
})
export class FooterComponent {

}
