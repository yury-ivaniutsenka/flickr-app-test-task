import React from 'react';
import styled from 'styled-components/native';
import {ScrollView} from 'react-native';
import PhotoGrid from 'react-native-photo-grid';
import FlickrImage from "../components/FlickrImage";
import {Routes} from "../Router";


const GridItem = styled.TouchableOpacity`
	width: ${({itemSize}) => itemSize};
	height: ${({itemSize}) => itemSize};
`;



const renderItem = (navigate) => (item, itemSize) =>
	<GridItem key={item.id}
			  itemSize={itemSize}
			  onPress={() => navigate(Routes.PREVIEW, item)}>
		<FlickrImage item={item}/>
	</GridItem>;

const PhotoGridView = ({screenProps, navigation: {navigate}}) => (
	<ScrollView>
		<PhotoGrid
			data={screenProps}
			itemsPerRow={3}
			itemMargin={1}
			renderItem={renderItem(navigate)}
		/>
	</ScrollView>
);


export default PhotoGridView;

