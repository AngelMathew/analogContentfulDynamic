import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/dynamic-components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
<router-outlet></router-outlet>
  `,
})
export class AppComponent {}
