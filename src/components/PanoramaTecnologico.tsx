import React from 'react';
import { useReportContext } from '../context/ReportContext';
import { LoadingIndicator } from './LoadingIndicator';
import { TemaTecnologico } from './TemaTecnologico';

export const PanoramaTecnologico: React.FC = () => {
  const { isGenerating, temasGenerados } = useReportContext();

  // Obtener categorías dinámicamente de los temas generados
  const categorias = Array.from(new Set(temasGenerados.map(tema => tema.categoria)));

  if (isGenerating) {
    return <LoadingIndicator message="Analizando panorama tecnológico y tendencias relevantes..." />;
  }

  const temasPorCategoria = categorias.map(categoria => ({
    categoria,
    temas: temasGenerados.filter(tema => tema.categoria === categoria)
  }));

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="border-b border-gray-200 pb-5">
        <h2 className="text-2xl font-bold text-gray-800">Panorama Tecnológico</h2>
        <p className="mt-2 text-gray-600">
          Análisis temático de las tendencias, competidores y desarrollo del sector
        </p>
      </div>


      {temasPorCategoria.map(({ categoria, temas }) => (
        <div key={categoria} className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 border-l-4 border-blue-500 pl-3">{categoria}</h3>
          
          {temas.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {temas.map((tema, index) => (
                <TemaTecnologico key={index} tema={tema} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic">No se encontraron datos para esta categoría.</p>
          )}
        </div>
      ))}
    </div>
  );
};