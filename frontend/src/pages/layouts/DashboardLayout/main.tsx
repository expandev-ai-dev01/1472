import { Outlet, Link, useLocation } from 'react-router-dom';

/**
 * @layout DashboardLayout
 * @summary Dashboard layout with navigation sidebar
 * @domain core
 * @type layout-component
 * @category layout
 *
 * @routing
 * - Path: /dashboard/*
 * - Children: Dashboard pages
 */
export const DashboardLayout = () => {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', current: location.pathname === '/dashboard' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        <aside className="w-64 bg-white border-r border-gray-200">
          <div className="flex flex-col h-full">
            <div className="flex items-center h-16 px-6 border-b border-gray-200">
              <h1 className="text-xl font-bold text-gray-900">DataFlow</h1>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    item.current ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto">
          <div className="h-16 bg-white border-b border-gray-200 flex items-center px-6">
            <h2 className="text-lg font-semibold text-gray-900">Gerenciamento de Registros</h2>
          </div>

          <div className="p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
