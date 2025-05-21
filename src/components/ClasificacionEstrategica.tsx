import React, { useState } from 'react';
import { useReportContext } from '../context/ReportContext';
import { LoadingIndicator } from './LoadingIndicator';
import { Filter, Download, ChevronDown } from 'lucide-react';

export const ClasificacionEstrategica: React.FC = () => {
  const { isGenerating, tablaEstrategica } = useReportContext();
  const [filtroImpacto, setFiltroImpacto] = useState<string | null>(null);

  if (isGenerating) {
    return <LoadingIndicator message="Clasificando información estratégica y niveles de impacto..." />;
  }

  const temasFiltrados = filtroImpacto 
    ? tablaEstrategica.filter(item => item.nivelImpacto === filtroImpacto)
    : tablaEstrategica;

  const getImpactoColor = (nivel: string) => {
    switch (nivel) {
      case 'Alto': return 'bg-red-100 text-red-800';
      case 'Medio': return 'bg-yellow-100 text-yellow-800';
      case 'Bajo': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getMadurezColor = (nivel: string) => {
    switch (nivel) {
      case 'Emergente': return 'bg-purple-100 text-purple-800';
      case 'En crecimiento': return 'bg-blue-100 text-blue-800';
      case 'Consolidado': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAccionColor = (accion: string) => {
    switch (accion) {
      case 'Actuar': return 'bg-red-100 text-red-800';
      case 'Analizar': return 'bg-yellow-100 text-yellow-800';
      case 'Monitorizar': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="border-b border-gray-200 pb-5">
        <h2 className="text-2xl font-bold text-gray-800">Clasificación Estratégica</h2>
        <p className="mt-2 text-gray-600">
          Análisis priorizado de temas clave según su impacto y madurez
        </p>
      </div>

      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm font-medium text-gray-500">Filtrar por impacto:</span>
          
          <button 
            onClick={() => setFiltroImpacto(null)} 
            className={`inline-flex items-center px-3 py-1.5 rounded-md text-sm ${
              filtroImpacto === null ? 'bg-gray-200 font-medium' : 'bg-white border border-gray-300 hover:bg-gray-50'
            }`}
          >
            Todos
          </button>
          
          <button 
            onClick={() => setFiltroImpacto('Alto')} 
            className={`inline-flex items-center px-3 py-1.5 rounded-md text-sm ${
              filtroImpacto === 'Alto' ? 'bg-red-100 text-red-800 font-medium' : 'bg-white border border-gray-300 hover:bg-gray-50'
            }`}
          >
            Alto
          </button>
          
          <button 
            onClick={() => setFiltroImpacto('Medio')}
            className={`inline-flex items-center px-3 py-1.5 rounded-md text-sm ${
              filtroImpacto === 'Medio' ? 'bg-yellow-100 text-yellow-800 font-medium' : 'bg-white border border-gray-300 hover:bg-gray-50'
            }`}
          >
            Medio
          </button>
          
          <button 
            onClick={() => setFiltroImpacto('Bajo')}
            className={`inline-flex items-center px-3 py-1.5 rounded-md text-sm ${
              filtroImpacto === 'Bajo' ? 'bg-green-100 text-green-800 font-medium' : 'bg-white border border-gray-300 hover:bg-gray-50'
            }`}
          >
            Bajo
          </button>
        </div>
        
        <button className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
          <Download size={16} className="mr-1.5" />
          Exportar tabla
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tema detectado
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nivel de impacto
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nivel de madurez
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Relevancia para el sector
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sugerencia de acción
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {temasFiltrados.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{item.tema}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getImpactoColor(item.nivelImpacto)}`}>
                    {item.nivelImpacto}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getMadurezColor(item.nivelMadurez)}`}>
                    {item.nivelMadurez}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{item.relevanciaSector}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getAccionColor(item.sugerenciaAccion)}`}>
                    {item.sugerenciaAccion}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};