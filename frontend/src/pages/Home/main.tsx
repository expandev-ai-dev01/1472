import { Link } from 'react-router-dom';
import { Button } from '@/core/components/Button';

/**
 * @page HomePage
 * @summary Landing page with welcome message and navigation
 * @domain core
 * @type landing-page
 * @category public
 *
 * @routing
 * - Path: /
 * - Guards: None (public)
 */
export const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Bem-vindo ao DataFlow</h1>

        <p className="text-xl text-gray-600 mb-8">
          Sistema simples e intuitivo para gerenciamento de registros. Crie, visualize, edite e
          exclua informações com praticidade.
        </p>

        <div className="flex gap-4 justify-center">
          <Link to="/dashboard">
            <Button size="lg">Acessar Dashboard</Button>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Interface Intuitiva</h3>
            <p className="text-gray-600">Design amigável e responsivo para todos os dispositivos</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Busca Avançada</h3>
            <p className="text-gray-600">Encontre registros rapidamente com filtros poderosos</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Gestão Completa</h3>
            <p className="text-gray-600">Crie, edite e exclua registros com facilidade</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
