import { MainHeroComponent } from '../app/components/dynamic-components/main-hero/main-hero.component';
import { FeaturedItemsComponent } from '../app/components/dynamic-components/featured-items/featured-items.component';
import {HeaderComponent} from '../app/components/dynamic-components/header/header.component';
import { FooterComponent } from '../app/components/dynamic-components/footer/footer.component';
import {
  DynamicItemConstructor,
} from '../types/render-template.types';
import {PageNotFoundComponent} from '../app/components/page-not-found/page-not-found.component';
type ComponentMap = {
  [name: string]: {
    loadComponent: () => DynamicItemConstructor;
  };
};

export const _dynamicComponentMap: ComponentMap = {
  // #6 component manifest object
  mainHero: {
    loadComponent: () => MainHeroComponent,
  },
  featuredItems: {
    loadComponent: () => FeaturedItemsComponent,
  },
  header: {
    loadComponent: () => HeaderComponent,
  },
  footer: {
    loadComponent: () => FooterComponent,
  },
  pageNotFound: {
    loadComponent: () => PageNotFoundComponent,
  },

};
