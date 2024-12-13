import React, { forwardRef } from 'react';

import { Action, ActionProps } from './item-action';
import { Grip } from 'lucide-react';

export const Handle = forwardRef<HTMLButtonElement, ActionProps>(
  (props, ref) => {
    return (
      <Action
        ref={ref}
        cursor="grab"
        data-cypress="draggable-handle"
        {...props}
      >
        <Grip />
      </Action>
    );
  }
);

Handle.displayName = 'Handle';
