import styled from 'styled-components';
import { BaseButton } from './BaseButton';

export const SecondaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

// todo: Reactには複数のCSSの適用方法があるので、複数の適用方法に対応できるようにする
const SButton = styled(BaseButton)`
  background-color: #11999e;
  }
`;
