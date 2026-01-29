
// Import React to provide the React namespace for React.ReactNode types
import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[]; // Liste détaillée des prestations
  benefits: string;  // Bénéfice principal pour le client
}

export interface SectorItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
