import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink,NgIf,AsyncPipe],
  template: `
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div *ngIf="content$ | async  as content" class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2
            class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
          >
            {{content[0].title}}
          </h2>
          <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
           {{content[0].description}}
          </p>
        </div>
      </div>
    </section>
  `,
})
export default class BlogComponent {
  constructor(private dataService:DataService){
  }

  content$=this.dataService.getTitle();
}
