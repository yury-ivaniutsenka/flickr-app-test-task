import React from 'react';
import App from './App';
import FlickrImage from './Pages/components/FlickrImage';

const item = {
    description: {
      _content: "asdfasdf"
    },
    farm: 8,
    id: "9366517630",
    isFamily: 0,
    ispublic: 1,
    owner: "29096781@N02",
	secret: "f22594b121",
	server: "7346",
	title: "IMG_4481",
}

import renderer from 'react-test-renderer';
import ImagePreviewPage from "./pages/ImagePreviewPage/index";

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

it('ImagePreviewPage renders without crashing', () => {
  const rendered = renderer.create(<ImagePreviewPage navigation={{state: {params: item}}} />).toJSON();
  expect(rendered).toBeTruthy();
});


it('flickr image parse image source uri right', () => {
  const rendered = renderer.create(<FlickrImage item={item} />).toJSON();
  expect(rendered.children[1].props.source.uri).toBe('https://farm8.staticflickr.com/7346/9366517630_f22594b121.jpg');
});