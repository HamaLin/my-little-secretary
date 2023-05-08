import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
`;

export const FlexColumn = styled(Flex)`
  flex-direction: column;
`;

export const FlexAlignCenter = styled(Flex)`
  align-items: center;
`;

export const FlexAllCenter = styled(FlexAlignCenter)`
  justify-content: center;
`;
