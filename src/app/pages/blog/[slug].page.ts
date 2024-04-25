import { Component, inject } from '@angular/core';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe } from '@angular/common';
import { tap } from 'rxjs';
import PostAttributes from '../../post-attributes';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [AsyncPipe, MarkdownComponent],
  template: `
    @if (post$ | async; as post) {
    <section class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <img class="post__image" [src]="post.attributes.coverImage" />
      <analog-markdown [content]="post.content" />
    </section>
    }
  `,
  styles: [
    `
      .post__image {
        max-height: 50vh;
        width: 100%;
        object-fit: cover;
        margin: 0 0 5em 0;
      }
      analog-markdown {
        h1 {
          margin: 1em 0;
        }
        p {
          font-size: 1.2em;
        }
      }
    `,
  ],
})
export default class BlogPostComponent {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  // update important SEO elements like title and meta tags
  readonly post$ = injectContent<PostAttributes>({
    param: 'slug',
    subdirectory: 'blog',
  }).pipe(
    tap((post) => {
      this.title.setTitle(post.attributes.title);
      this.meta.addTags(post.attributes.meta);
    })
  );
}
