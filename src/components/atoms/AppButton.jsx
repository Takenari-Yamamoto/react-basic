import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: rgb(255, 0, 0);
  padding: 10px;
`;

const AppButton = ({ text }) => {
  return <Button className="app-button">{text}</Button>;
};

// デフォルト値
AppButton.defaultProps = {
  text: 'BUTTON',
};

export default AppButton;
