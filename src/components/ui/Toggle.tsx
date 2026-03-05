'use client';

import { cn } from '@/utils/cn';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}

export function Toggle({ checked, onChange, label }: ToggleProps) {
  return (
    <div className="relative flex items-center justify-center w-12 h-12">
      <button
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className={cn(
          'relative w-11 h-6 rounded-full transition-colors',
          checked ? 'bg-success' : 'bg-gray-300'
        )}
      >
        <span
          className={cn(
            'absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow-md transition-transform',
            checked && 'translate-x-5'
          )}
        />
      </button>
    </div>
  );
}
