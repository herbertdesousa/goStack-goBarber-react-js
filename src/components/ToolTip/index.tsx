import React from 'react';

import { Container } from './styles';

interface TooltipProps {
  title: string;
  className?: string;
}

const ToolTip: React.FC<TooltipProps> = ({ children, className = '', title }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  )
}

export default ToolTip;
