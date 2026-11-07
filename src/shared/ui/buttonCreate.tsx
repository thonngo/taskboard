import type { FC } from 'react';

export interface ButtonCreateProps {
  disabled: boolean;
  onClick: () => void;
  children: string;
}

export const ButtonCreate: FC<ButtonCreateProps> = ({ disabled, onClick, children }) => {
  return (
    <button
      className="bg-blue-600 rounded whitespace-nowrap shrink-0 text-white px-4 py-2 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
