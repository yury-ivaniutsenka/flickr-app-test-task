import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import {withPropsOnChange} from 'recompose';


const enhancer = withPropsOnChange(['item'], ({item}) => ({
	title: item.id,
}));

const Title = styled.Text`
	font-weight: bold;
	font-size: 20px;	
`;

const Description = styled.Text`
	font-style: italic;
	font-size: 15px;
`;

const Wrapper = styled.View`
	
`;



const DescriptionContainer = ({item}) => {
	console.log("DescriptionContainer", {item});
	return(
		<Wrapper>
			<Title>{item.title}</Title>
			<Description>{item.description._content}</Description>
		</Wrapper>
	);
};


DescriptionContainer.propTypes = {
	item: PropTypes.object,
};

export default enhancer(DescriptionContainer);

