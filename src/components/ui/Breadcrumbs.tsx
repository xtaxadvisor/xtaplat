import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav className="mb-4">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/admin" className="text-gray-500 hover:text-gray-700">
            <Home className="h-4 w-4" />
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <React.Fragment key={name}>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <li>
                {isLast ? (
                  <span className="text-gray-700 font-medium">
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}