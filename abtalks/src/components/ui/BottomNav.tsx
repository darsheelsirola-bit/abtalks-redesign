import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NAV_ITEMS, type NavItem } from './navItems';

interface BottomNavProps {
  items?: NavItem[];
  className?: string;
}

export const BottomNav: React.FC<BottomNavProps> = ({ items = NAV_ITEMS, className = '' }) => {
  const location = useLocation();

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-neutral-950/60 border-t border-neutral-200 dark:border-neutral-800 ${className}`}
      role="navigation"
      aria-label="Primary"
    >
      <ul className="flex items-center justify-around h-14">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
          return (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={`flex flex-col items-center gap-1 px-2 py-1.5 transition-colors duration-fast ${
                  isActive
                    ? 'text-primary-500'
                    : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon size={22} aria-hidden="true" className={isActive ? 'fill-current' : ''} />
                <span className="text-[10px] font-medium leading-none">{item.label}</span>
                {item.badge && (
                  <span
                    className="absolute -top-1 -right-1 min-w-[16px] h-5 px-1.5 text-[10px] font-semibold text-white bg-danger-500 rounded-full flex items-center justify-center"
                    aria-label={`${item.badge} notifications`}
                  >
                    {item.badge}
                  </span>
                )}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
