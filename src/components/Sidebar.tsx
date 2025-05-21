import React from 'react';
import { 
  BarChart3, FileText, Layers, Radar, LayoutDashboard, Database
} from 'lucide-react';
import { useReportContext } from '../context/ReportContext';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  disabled: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const { isGenerated, topico } = useReportContext();

  const navItems: NavItem[] = [
    {
      id: 'inicio',
      label: 'Tu Tema de Interés',
      icon: <LayoutDashboard size={20} />,
      disabled: false
    },
    {
      id: 'panorama',
      label: 'Panorama Tecnológico',
      icon: <Radar size={20} />,
      disabled: !isGenerated && topico === ''
    },
    {
      id: 'reporte',
      label: 'Reporte Ejecutivo',
      icon: <FileText size={20} />,
      disabled: !isGenerated && topico === ''
    },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <Radar className="text-blue-600" size={24} />
          <h1 className="text-xl font-bold text-gray-800">TechRadarAI</h1>
        </div>
        
        <nav>
          <ul className="space-y-2">
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => !item.disabled && setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition ${
                    activeTab === item.id
                      ? 'bg-blue-50 text-blue-700'
                      : item.disabled
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  disabled={item.disabled}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};