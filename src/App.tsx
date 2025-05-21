import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { FormularioInicial } from './components/FormularioInicial';
import { PanoramaTecnologico } from './components/PanoramaTecnologico';
import { ReporteEjecutivo } from './components/ReporteEjecutivo';
import { ReportContextProvider } from './context/ReportContext';

function App() {
  const [activeTab, setActiveTab] = useState('inicio');

  return (
    <ReportContextProvider>
      <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
        {activeTab === 'inicio' && <FormularioInicial onGenerate={() => setActiveTab('panorama')} />}
        {activeTab === 'panorama' && <PanoramaTecnologico />}
        {activeTab === 'reporte' && <ReporteEjecutivo />}
      </Layout>
    </ReportContextProvider>
  );
}

export default App;