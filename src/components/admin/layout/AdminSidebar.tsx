import React from 'react';
import { Link } from 'react-router-dom';
import type { MenuItem } from '../../../types';

interface AdminSidebarProps {
  menuItems: MenuItem[];
  currentPath: string;
}

export function AdminSidebar({ menuItems, currentPath }: AdminSidebarProps) {
  return (
    <aside className="w-64 bg-white h-[calc(100vh-4rem)] border-r border-gray-200 fixed">
      <nav className="mt-5 px-2">
        {menuItems.map((item) => {
          const isActive = currentPath === item.href;
          return (
            <Link
              key={item.title}
              to={item.href}
              className={`group flex items-center px-2 py-2 text-base font-medium rounded-md mb-1
                ${isActive 
                  ? 'bg-red-50 text-red-600' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
            >
              <item.icon className={`mr-4 h-6 w-6 ${isActive ? 'text-red-600' : 'text-gray-400'}`} />
              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}