import React, { forwardRef, HTMLAttributes } from 'react';
import { Action, ActionProps } from './item-action';
import { Handle } from './item-handle';
import { Remove } from './item-remove';
import styles from './TreeItem.module.css';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

export interface Props extends Omit<HTMLAttributes<HTMLLIElement>, 'id'> {
  childCount?: number;
  clone?: boolean;
  collapsed?: boolean;
  depth: number;
  disableInteraction?: boolean;
  disableSelection?: boolean;
  ghost?: boolean;
  handleProps?: ActionProps;
  indicator?: boolean;
  indentationWidth: number;
  value: string;
  onCollapse?(): void;
  onRemove?(): void;
  wrapperRef?(node: HTMLLIElement): void;
}

export const TreeItem = forwardRef<HTMLDivElement, Props>(
  (
    {
      childCount,
      clone,
      depth,
      disableSelection,
      disableInteraction,
      ghost,
      handleProps,
      indentationWidth,
      indicator,
      collapsed,
      onCollapse,
      onRemove,
      style,
      value,
      wrapperRef,
      ...props
    },
    ref
  ) => {
    return (
      <li
        className={cn(
          styles.Wrapper,
          clone && styles.clone,
          ghost && styles.ghost,
          indicator && styles.indicator,
          disableSelection && styles.disableSelection,
          disableInteraction && styles.disableInteraction
        )}
        ref={wrapperRef}
        style={
          {
            '--spacing': `${indentationWidth * depth}px`,
          } as React.CSSProperties
        }
        {...props}
      >
        <div className={styles.TreeItem} ref={ref} style={style}>
          <Handle {...handleProps} />
          {onCollapse && (
            <Action
              onClick={onCollapse}
              className={cn(
                styles.Collapse,
                collapsed && styles.collapsed
              )}
            >
              {collapseIcon}
            </Action>
          )}
          <span className={styles.Text}>{value}</span>
          {!clone && onRemove && <Remove onClick={onRemove} />}
          {clone && childCount && childCount > 1 ? (
            <span className={styles.Count}>{childCount}</span>
          ) : null}
        </div>
      </li>
    );
  }
);

const collapseIcon = (
  <ChevronDown className={styles.CollapseIcon} size={24} />
);

TreeItem.displayName = 'TreeItem';
