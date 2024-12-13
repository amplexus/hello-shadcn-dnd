import React from 'react';

import { Action, ActionProps } from './item-action';
import { X } from 'lucide-react';

export function Remove(props: ActionProps) {
  return (
    <Action
      {...props}
      active={{
        fill: 'rgba(255, 70, 70, 0.95)',
        background: 'rgba(255, 70, 70, 0.1)',
      }}
    >
      <X />
    </Action>
  );
}
