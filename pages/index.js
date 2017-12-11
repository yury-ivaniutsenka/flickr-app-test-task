import React from 'react';
import LoaderPage from './LoaderPage';
import {Router} from './Router';
import withFlickr from "./enhancers/withFlickr";

const Pages = ({photos}) => photos ? <Router screenProps={photos}/> : <LoaderPage />;

export default withFlickr(Pages);