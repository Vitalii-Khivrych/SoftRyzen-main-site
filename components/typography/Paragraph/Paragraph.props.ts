import { ReactNode } from 'react';

export interface ParagraphProps {
  variant?: 'dark' | 'white';
  variantFontSize?: 'sm_16' | 'lg_20';
  className?: string;
  children: ReactNode;
}
