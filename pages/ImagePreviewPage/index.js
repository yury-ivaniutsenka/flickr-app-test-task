import React from 'react'
import styled from 'styled-components/native'
import {Routes} from '../Router'
import FlickrImage from '../components/FlickrImage'
import Description from './components/Description'


const Container = styled.View`
	flex: 1;
	background-color: white;
	align-items: center;
	justify-content: center;
`;
const Wrapper = styled.TouchableOpacity`
	height: 100%;
	width: 100%;
`;



const ImagePreviewPage = ({navigation: {navigate, state: {params: item}}}) => (
	<Container>
		<Wrapper onPress={() => navigate(Routes.GRID)}>
			<FlickrImage item={item}/>
			<Description item={item}/>
		</Wrapper>
	</Container>
);


export default ImagePreviewPage;

