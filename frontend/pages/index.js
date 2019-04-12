import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

const Index = () => <Title>My page</Title>;

Index.getInitialProps = async () => {};

export default Index;
