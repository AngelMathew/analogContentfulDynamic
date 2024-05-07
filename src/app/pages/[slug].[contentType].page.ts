import { Component, inject } from '@angular/core';
import { RenderTemplateComponent } from '../../dynamic-renderer/dynamic-renderer.component';
import { Router } from '@angular/router';
import { injectLoad } from '@analogjs/router';
import { toSignal } from '@angular/core/rxjs-interop';

import { load } from './[slug].[contentType].server';

@Component({
  selector: 'app-pagegh',
  standalone: true,
  imports: [RenderTemplateComponent],
  template: `<app-render-template [components]="pageData()" />`,
})
export default class HomeDComponent {
  private readonly route = inject(Router);

  pageData = toSignal(injectLoad<typeof load>(), { requireSync: true });

  constructor() {}
}
