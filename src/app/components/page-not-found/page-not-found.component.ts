import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentData, DynamicComponent } from 'src/types/render-template.types';

@Component({
  selector: 'app-page-not-found',
  imports: [CommonModule],
  standalone: true,
  template: `<div class="text-center m-auto"><h2 >Page Not Found</h2><a href='/'>Go Back</a></div>`,
})
export class PageNotFoundComponent implements DynamicComponent {

  constructor() {}
  componentDataResolver() {

  }
}
