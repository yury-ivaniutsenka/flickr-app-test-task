import {compose, lifecycle, withState} from 'recompose';
import React from 'react';

export default compose(
	withState('photos', 'setPhotos', []),
	lifecycle({
		componentDidMount: function () {
			fetch("https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=4ef2fe2affcdd6e13218f5ddd0e2500d&user_id=29096781@N02&format=json&nojsoncallback=1&extras=description")
				.then(res => {
					const data = JSON.parse(res._bodyText);
					let photos = data.photos.photo;
					this.props.setPhotos(photos);

				})
		}
	})
);
