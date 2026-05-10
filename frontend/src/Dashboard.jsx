import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Mis envíos');

  // Conjunto de datos para gráficos (TODO: Alimentar dinámicamente desde la API)
  const chartEnCurso = [{ name: 'En camino', value: 45, fill: '#ef4444' }, { name: 'Restante', value: 55, fill: '#0B353E' }]; 
  const chartCompletados = [{ name: 'Entregados', value: 80, fill: '#22c55e' }, { name: 'Restante', value: 20, fill: '#0B353E' }]; 
  const chartRevision = [{ name: 'Con Incidencia', value: 10, fill: '#38bdf8' }, { name: 'Restante', value: 90, fill: '#0B353E' }]; 

  // Simulación de registros para la tabla principal
  const tableData = [
    { id: 1, tracking: 'NX-9928371', date: '2026-05-09', dest: 'Ciudad de México, CDMX', mode: 'Next Day' },
    { id: 2, tracking: 'NX-8837122', date: '2026-05-08', dest: 'Guadalajara, JAL', mode: 'Express' },
    { id: 3, tracking: 'NX-7712399', date: '2026-05-08', dest: 'Monterrey, NL', mode: 'Same Day' },
    { id: 4, tracking: 'NX-6648210', date: '2026-05-07', dest: 'Querétaro, QRO', mode: 'Libre Emisiones' },
  ];

  const sidebarItems = ['Dashboard', 'Envios', 'Haz un envío', 'Cotizador', 'Recolecciones', 'Mis envíos', 'Administración', 'Integraciones', 'Estadísticas'];

  return (
    <div style={layoutStyle}>
      {/* Navegación Lateral */}
      <aside style={sidebarStyle}>
        <div style={logoContainer}>
          <svg width="180" height="40" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 20L25 15L35 20V30L25 35L15 30V20Z" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M25 15V25M15 20L25 25L35 20" stroke="#38bdf8" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M5 18H10M7 25H12M3 21.5H9" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round"/>
            <text x="45" y="28" fontFamily="system-ui, sans-serif" fontSize="22" fontWeight="900" fill="#ffffff">
              Nex<tspan fill="#38bdf8">Logix</tspan>
            </text>
          </svg>
        </div>
        <nav style={navStyle}>
          {sidebarItems.map(item => (
            <button 
              key={item} 
              onClick={() => setActiveTab(item)}
              style={item === activeTab ? navItemActive : navItem}
            >
              {item === 'Mis envíos' ? '📄 ' : '📦 '} {item}
            </button>
          ))}
        </nav>
      </aside>

      {/* Área Principal de Contenido */}
      <main style={mainAreaStyle}>
        <header style={topbarStyle}>
          <div style={{ fontWeight: 'bold', color: '#e2e8f0' }}>
            Tu saldo disponible <span style={{ color: '#38bdf8', fontSize: '1.2rem', marginLeft: '10px' }}>$ 158.60</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ color: '#22c55e', fontWeight: 'bold', cursor: 'pointer' }}>Soporte</span>
            <span style={{ fontWeight: 'bold', color: '#e2e8f0' }}>Hola, Gonzalo</span>
            <div style={avatarStyle}>G</div>
          </div>
        </header>

        {activeTab === 'Mis envíos' ? (
          <div style={contentStyle}>
            <h1 style={{ fontSize: '1.5rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: '#38bdf8' }}>→</span> Mis Envíos
            </h1>

            {/* Visualización de Métricas Clave */}
            <div style={donutsContainer}>
              <DonutCard title="En curso" data={chartEnCurso} percentage="45%" color="#ef4444" labels={['En el almacén', 'En punto central', 'En camino a destino']} />
              <DonutCard title="Completados" data={chartCompletados} percentage="80%" color="#22c55e" labels={['Entregados', 'Retornos', 'Cancelados']} />
              <DonutCard title="En revisión" data={chartRevision} percentage="10%" color="#38bdf8" labels={['Con Incidencia', 'En revisión total']} />
            </div>

            {/* Buscador y Controles de Filtro */}
            <div style={searchContainer}>
              <div style={{ display: 'flex', gap: '10px', flex: 1 }}>
                <input type="text" placeholder="🔍 Nombre, Apellido, Nº de seguimiento" style={searchInput} />
                <button style={btnPrimary}>Buscar</button>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button style={btnSecondary}>Borrar filtros</button>
                <button style={btnOutline}>Filtros</button>
              </div>
            </div>

            {/* Tabla de Registros */}
            <div style={tableContainer}>
              <table style={tableStyle}>
                <thead>
                  <tr style={tableHeaderRow}>
                    <th style={thStyle}>☑ Seguimiento</th>
                    <th style={thStyle}>Fecha</th>
                    <th style={thStyle}>Destino</th>
                    <th style={thStyle}>Modalidad</th>
                    <th style={thStyle}>⬇ Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row) => (
                    <tr key={row.id} style={tableRow}>
                      <td style={{...tdStyle, color: '#38bdf8', fontWeight: 'bold'}}>{row.tracking}</td>
                      <td style={tdStyle}>{row.date}</td>
                      <td style={tdStyle}>{row.dest}</td>
                      <td style={tdStyle}>
                        <span style={badgeStyle}>{row.mode}</span>
                      </td>
                      <td style={tdStyle}>
                        <button style={btnDownload}>☁️ Descargar PDF</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        ) : (
          <div style={contentStyle}>
            <h2 style={{ color: '#94a3b8', textAlign: 'center', marginTop: '100px' }}>
              El módulo "{activeTab}" se encuentra en desarrollo 🚧
            </h2>
          </div>
        )}
      </main>
    </div>
  );
}

// Componente Reutilizable: Gráfico de Anillo
function DonutCard({ title, data, percentage, color, labels }) {
  return (
    <div style={donutCardStyle}>
      <div style={{ width: '160px', height: '160px', position: 'relative' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} innerRadius={55} outerRadius={80} dataKey="value" startAngle={90} endAngle={-270} stroke="none">
              {data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.fill} />)}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: '#0B353E', border: '1px solid #145366', color: 'white' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div style={donutLegendStyle}>
        <h3 style={{ margin: '0 0 10px 0', color: color }}>{percentage} {title}</h3>
        {labels.map((lbl, i) => (
          <div key={i} style={{ fontSize: '0.85rem', color: '#94a3b8', margin: '4px 0' }}>0% {lbl}</div>
        ))}
      </div>
    </div>
  );
}

// --- TOKENS DE DISEÑO Y ESTILOS ---
const layoutStyle = { display: 'flex', height: '100vh', width: '100vw', backgroundColor: '#07262D', fontFamily: 'system-ui, sans-serif', color: '#ffffff' };

const sidebarStyle = { width: '250px', minWidth: '250px', backgroundColor: '#0B353E', borderRight: '1px solid #145366', display: 'flex', flexDirection: 'column' };
const logoContainer = { padding: '20px', borderBottom: '1px solid #145366', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90px' };
const navStyle = { padding: '20px 0', display: 'flex', flexDirection: 'column', gap: '5px' };
const navItem = { padding: '12px 24px', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', fontSize: '0.95rem', transition: '0.2s', fontWeight: '500' };
const navItemActive = { ...navItem, color: '#38bdf8', backgroundColor: '#114652', borderRight: '4px solid #38bdf8', fontWeight: 'bold' };

const mainAreaStyle = { flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' };
const topbarStyle = { height: '90px', minHeight: '90px', backgroundColor: '#0B353E', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 30px', borderBottom: '1px solid #145366' };
const avatarStyle = { width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#38bdf8', color: '#07262D', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' };

const contentStyle = { padding: '30px', flex: 1, overflowY: 'auto' };

const donutsContainer = { display: 'flex', justifyContent: 'space-between', gap: '20px', marginTop: '20px', marginBottom: '40px' };
const donutCardStyle = { flex: 1, display: 'flex', alignItems: 'center', gap: '20px' };
const donutLegendStyle = { display: 'flex', flexDirection: 'column' };

const searchContainer = { backgroundColor: '#114652', padding: '20px', borderRadius: '12px 12px 0 0', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #145366' };
const searchInput = { flex: 1, padding: '12px 15px', borderRadius: '8px', border: '1px solid #145366', backgroundColor: '#0B353E', color: 'white', outline: 'none' };
const btnPrimary = { backgroundColor: '#38bdf8', color: '#07262D', border: 'none', padding: '0 30px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' };
const btnSecondary = { backgroundColor: 'transparent', color: '#94a3b8', border: '1px solid #145366', padding: '0 20px', borderRadius: '8px', cursor: 'pointer' };
const btnOutline = { backgroundColor: 'transparent', color: '#38bdf8', border: '2px solid #38bdf8', padding: '0 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' };
const btnDownload = { backgroundColor: '#0B353E', color: '#38bdf8', border: 'none', padding: '8px 15px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' };

const tableContainer = { backgroundColor: '#114652', borderRadius: '0 0 12px 12px', overflow: 'hidden' };
const tableStyle = { width: '100%', borderCollapse: 'collapse', textAlign: 'left' };
const tableHeaderRow = { backgroundColor: '#0B353E' };
const thStyle = { padding: '15px 20px', fontWeight: 'bold', borderBottom: '1px solid #145366', color: '#94a3b8' };
const tableRow = { borderBottom: '1px solid #145366', transition: 'background-color 0.2s' };
const tdStyle = { padding: '15px 20px', color: '#e2e8f0' };
const badgeStyle = { color: '#94a3b8', fontWeight: 'bold' };
