import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `

<header>
      <nav class="bg-white border-gray-200 px-4 lg:px-6 py-8 dark:bg-gray-800">
        <div
          class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
        >
          <a href="/" class="flex items-center">
            <h2
              class="self-center font-semibold whitespace-nowrap dark:text-white"
            >
              Blog
            </h2>
          </a>
        </div>
      </nav>
    </header>
  `,
})
export default class HeaderComponent {
}
