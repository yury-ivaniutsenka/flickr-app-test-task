import PhotoGridView from './PhotoGridView';
import ImagePreviewPage from './ImagePreviewPage';
import {StackNavigator} from 'react-navigation';

export const Routes = {
	GRID: "PhotoGridView",
	PREVIEW: "ImagePreviewPage",
};

export const Router = StackNavigator({
	PhotoGridView: {
		screen: PhotoGridView,
	},
	ImagePreviewPage: {
		screen: ImagePreviewPage,
	}
}, {
	headerMode: 'none',
});