import { PageServerLoad } from '@analogjs/router';
import {
  getPageBySlug,
  getHeader,
  getFooter,
  transformContentfulData,
} from '../services/contentful.service';

export const load = async ({params,req}:PageServerLoad) => {
  const pageData = await getPageBySlug(`/${params ? params['slug'] : ''}`);

  const headerData = await getHeader();
  const footerData = await getFooter();

  return transformContentfulData(headerData).concat(
    transformContentfulData(pageData),
    transformContentfulData(footerData),
  );
};
