import { useEffect, useState } from 'react';
import { servicesConfig } from '../config/servicesConfig';
import { fetchServices } from '../services/contentService';

export function useServices() {
  const [services, setServices] = useState(servicesConfig);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let active = true;
    setIsLoading(true);

    fetchServices()
      .then((result) => {
        if (active && Array.isArray(result)) {
          setServices(result);
        }
      })
      .finally(() => {
        if (active) {
          setIsLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return { services, isLoading };
}

