import { MetaDefinition } from "@angular/platform-browser";

export default interface PostAttributes {
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  meta: MetaDefinition[];
}
