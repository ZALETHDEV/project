import React from 'react';
import { useReportContext } from '../context/ReportContext';
import { LoadingIndicator } from './LoadingIndicator';
import { FileText, Download, ExternalLink, Copy } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const ReporteEjecutivo: React.FC = () => {
  const { isGenerating, reporteEjecutivo } = useReportContext();

  if (isGenerating) {
    return <LoadingIndicator message="Preparando reporte ejecutivo y recomendaciones..." />;
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="border-b border-gray-200 pb-5">
        <h2 className="text-2xl font-bold text-gray-800">Reporte Ejecutivo</h2>
        <p className="mt-2 text-gray-600">
          Resumen estratégico, conclusiones clave y recomendaciones de acción
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors">
          <Download size={16} className="mr-2" />
          Exportar como PDF
        </button>
      </div>

      {/* Resumen Ejecutivo */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            <FileText size={18} className="mr-2 text-blue-600" />
            Resumen Ejecutivo
          </h3>
        </div>
        <div className="p-6">
          <div className="prose prose-blue max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {reporteEjecutivo.resumenEjecutivo}
            </ReactMarkdown>
          </div>
        </div>
      </div>



      {/* Links Destacados */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
          <h3 className="text-lg font-semibold text-gray-800">Links de interés y artículos destacados</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reporteEjecutivo.linksDestacados.map((link, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-md overflow-hidden hover:shadow-sm transition-shadow"
              >
                <div className="p-4">
                  <h4 className="text-md font-medium text-gray-900 mb-2">{link}</h4>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{link}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{link}</span>
                    <div className="flex space-x-2">
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <Copy size={16} />
                      </button>
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 text-blue-600 hover:text-blue-800"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};