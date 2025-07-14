import { useState, lazy, Suspense } from 'react';
import './App.css';

const Dash = lazy(() => import('remote_dash/HelloDash'));
const Clients = lazy(() => import('remote_clients/HelloClients'));

export default function App() {
  const [page, setPage] = useState<'dash'|'clients'>('dash');
  const Remote = page === 'dash' ? Dash : Clients;

  return (
    <div style={{ display: 'flex' }}>
      <nav style={{ padding: 10 }}>
        <button onClick={() => setPage('dash')}>Dashboard</button>
        <button onClick={() => setPage('clients')}>Clientes</button>
      </nav>
      <main style={{ padding: 10 }}>
        <Suspense fallback="Loading...">
          <Remote />
        </Suspense>
      </main>
    </div>
  );
}
