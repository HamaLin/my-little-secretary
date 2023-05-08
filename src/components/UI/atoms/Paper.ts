import styled from 'styled-components';
import { FlexColumn } from './layout';

export const Paper = styled(FlexColumn)`
  background-color: ${(props) => props.theme.background.default};
  box-shadow: 0 4px 6px 1px rgba(0, 0, 0, 0.15);
  border: none;
  border-radius: 8px;
`;
