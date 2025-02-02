import {
  getPageBySlug,
  getHeader,
  getFooter,
  transformContentfulData,
} from '../services/contentful.service';

export const load = async () => {
  const pageData = await getPageBySlug('/');

  const headerData = await getHeader();
  const footerData = await getFooter();

  return transformContentfulData(headerData).concat(
    transformContentfulData(pageData),
    transformContentfulData(footerData),
  );
};
