import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  top:0;
  bottom: 0;
  left:0;
  right: 0;
  background: rgba(0,0,0,${({ alpha }) => alpha || 0.6} );
  
`;
