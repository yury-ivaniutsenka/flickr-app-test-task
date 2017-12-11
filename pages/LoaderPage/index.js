import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';

const Wrapper = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;


const LoaderPage = () => (
	<Wrapper>
		<Text>Loading...</Text>
	</Wrapper>
);

export default LoaderPage;

