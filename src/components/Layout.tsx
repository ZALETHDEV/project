import React from 'react';
import { Sidebar } from './Sidebar';
import { AlertTriangle, CheckCircle, DivideIcon as LucideIcon } from 'lucide-react';
import { useReportContext } from '../context/ReportContext';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const { isGenerated, topico } = useReportContext();
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-6 md:p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          {topico && (
            <div className="mb-8 px-4 py-3 bg-blue-50 border-l-4 border-blue-500 rounded">
              <h2 className="text-lg font-medium text-blue-800">
                Tópico de interés: <span className="font-bold">{topico}</span>
              </h2>
            </div>
          )}
          
          {isGenerated && activeTab !== 'inicio' && (
            <div className="mb-6 flex items-center gap-2 text-green-700 bg-green-50 px-4 py-2 rounded">
              <CheckCircle size={18} />
              <span className="text-sm font-medium">Información generada correctamente</span>
            </div>
          )}
          
          {children}
        </div>
      </main>
    </div>
  );
};