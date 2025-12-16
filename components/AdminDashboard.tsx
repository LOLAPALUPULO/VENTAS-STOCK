// Add export for AdminDashboard component
import React from 'react';
import { FeriaConfig, Sale } from '../types'; // Adjust path as needed

export function AdminDashboard({
  activeFeriaConfig,
  activeSales,
  feriaHistory,
  onUpdateFeriaConfig,
  onFinalizeFeria,
  onActivateHistoricalFeria,
  onDeleteHistoricalFeria,
  onLogout,
}: {
  activeFeriaConfig: FeriaConfig | null;
  activeSales: Sale[];
  feriaHistory: any[];
  onUpdateFeriaConfig: (config: FeriaConfig) => Promise<void>;
  onFinalizeFeria: () => Promise<void>;
  onActivateHistoricalFeria: (feriaId: string) => Promise<void>;
  onDeleteHistoricalFeria: (feriaId: string) => Promise<void>;
  onLogout: () => Promise<void>;
}): React.ReactElement {
  // Placeholder implementation for AdminDashboard
  return (
    <div>
      <h1>Admin Dashboard</h1>
      {activeFeriaConfig ? (
        <p>Active Feria: {activeFeriaConfig.nombreFeria}</p>
      ) : (
        <p>No active feria.</p>
      )}
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
