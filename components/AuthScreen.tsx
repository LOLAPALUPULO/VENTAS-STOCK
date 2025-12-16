// Add export for AuthScreen component
import React from 'react';

export function AuthScreen({ onLogin }: { onLogin: (role: string) => void }): React.ReactElement {
  // Placeholder implementation for AuthScreen
  return (
    <div>
      <h1>Auth Screen</h1>
      <button onClick={() => onLogin('user')}>Login as User</button>
      <button onClick={() => onLogin('admin')}>Login as Admin</button>
    </div>
  );
}
