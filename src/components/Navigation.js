// @flow
// @jsx glam
import React from 'react';
import glam from 'glam';
import { Button, Nav } from './primitives';
import { ChevronLeft, ChevronRight } from './svg';

const BUTTON_SIZE = 50;

const icon = {
  left: ChevronLeft,
  right: ChevronRight,
};

export const Navigation = ({
  mouseIsIdle,
  ...props
}: {
  mouseIsIdle: boolean,
}) => (
  <Nav
    css={{
      display: 'flex ',
      alignItems: 'center',
      justifyContent: 'space-between',
      opacity: mouseIsIdle ? 0 : 1,
      transition: 'opacity 300ms',
    }}
    {...props}
  />
);

export const NavigationItem = ({
  align,
  ...props
}: {
  align: 'left' | 'right',
}) => {
  const Icon = icon[align];

  return (
    <Button
      css={{
        [align]: 16,
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.2)',
        border: 0,
        borderRadius: '50%',
        color: 'white',
        cursor: 'pointer',
        display: 'flex ',
        fontSize: 'inherit',
        height: BUTTON_SIZE,
        justifyContent: 'center',
        marginTop: -(BUTTON_SIZE / 2),
        outline: 0,
        position: 'absolute',
        top: '50%',
        transition: 'background-color 200ms',
        width: BUTTON_SIZE,

        '&:hover': {
          background: 'rgba(255, 255, 255, 0.3)',
        },
        '&:active': {
          background: 'rgba(255, 255, 255, 0.2)',
        },
      }}
      {...props}
    >
      <Icon />
    </Button>
  );
};
