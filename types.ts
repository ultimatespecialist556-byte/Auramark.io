
import React from 'react';

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}
