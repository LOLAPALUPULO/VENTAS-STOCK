// Add exports for FeriaConfig and Sale types
export interface FeriaConfig {
  nombreFeria: string;
  // Add other properties as needed based on usage in App.tsx
  [key: string]: any; // Allows for additional, undefined properties
}

export interface Sale {
  id?: string;
  // Add other properties as needed based on usage in App.tsx
  [key: string]: any; // Allows for additional, undefined properties
}
