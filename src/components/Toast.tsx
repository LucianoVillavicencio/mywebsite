import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="toast-container">
      <div className="toast-msg">
        <CheckCircle2 size={18} />
        <span dangerouslySetInnerHTML={{ __html: message }}></span>
      </div>
    </div>
  );
};
