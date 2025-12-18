// Added React import to resolve the React namespace for React.ReactNode
import React from 'react';

export interface RewardInfo {
  title: string;
  desc: string;
  visual: string;
  color: string;
  shadow: string;
}

export interface LevelData {
  level: string;
  range: string;
  reward: string;
  extra: string;
}

export interface ProductInfo {
  tag: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}