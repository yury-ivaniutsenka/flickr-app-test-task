import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import {compose, withPropsOnChange, withState} from 'recompose';
import {ActivityIndicator, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const enhancer = compose(
	withState('loading', 'setLoading', true),
	withPropsOnChange(['item'], ({item}) => ({
		source: {
			uri: 'https://farm' + item.farm + '.staticflickr.com/' + item.server + '/' + item.id + '_' + item.secret + '.jpg',
			cache: 'force-cache',
		},

	})));

const Wrapper = styled.View`
		flex: 1;
		position: relative;
		justify-content: center;
		align-items: center;
`;
const FlickrImage = styled.Image`
		position: absolute;
		width: 100%;
		height: 100%;
`;


const FlickImageContainer = ({loading, setLoading, source, cache}) =>
	<Wrapper>
		{loading && <ActivityIndicator/>}
		<FlickrImage source={source}
					 onLoadEnd={() => setLoading(false)}/>
	</Wrapper>

FlickImageContainer.propTypes = {
	item: PropTypes.object,
};

export default enhancer(FlickImageContainer);

