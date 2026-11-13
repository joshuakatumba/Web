import { useEffect } from 'react';
import { businessConfig } from '../config/businessConfig';

export function useDocumentTitle(pageTitle) {
  useEffect(() => {
    const brandName = businessConfig.brand.name;
    document.title = pageTitle ? `${pageTitle} | ${brandName}` : brandName;
  }, [pageTitle]);
}

