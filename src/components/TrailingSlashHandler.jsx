import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Trailing Slash Normalizer
 * Redirects URLs with trailing slashes to non-trailing versions (except root)
 * This prevents duplicate content issues
 */
export default function TrailingSlashHandler() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { pathname, search, hash } = location;
    
    // If path has trailing slash and is not root, redirect without it
    if (pathname !== '/' && pathname.endsWith('/')) {
      const newPath = pathname.slice(0, -1);
      navigate(newPath + search + hash, { replace: true });
    }
  }, [location, navigate]);

  return null;
}
