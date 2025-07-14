import { Routes, Route, Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ErrorBoundary } from './ErrorBoundary';

const Clients = lazy(() => import('remote_clients/HelloClients').catch(() => import('./fallbacks/FallbackClients')));
const Dash = lazy(() => import('remote_dash/HelloDash').catch(() => import('./fallbacks/FallbackDash')));

export default function App() {
  return (
    <>
      <nav>
        <Link to="/clients">Clientes</Link> | <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Routes>
        <Route
          path="/clients"
          element={
            <ErrorBoundary>
              <Suspense fallback="Loading Clients...">
                <Clients />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ErrorBoundary>
              <Suspense fallback="Loading Dash...">
                <Dash />
              </Suspense>
            </ErrorBoundary>
          }
        />
      </Routes>
    </>
  );
}
