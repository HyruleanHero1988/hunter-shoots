import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './images/logo.jpg';
import './App.css';
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";


import { render } from 'react-dom';
import ImageGallery from 'react-image-gallery';


class Home extends Component {



	render() {
		const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb',
        originalAlt: 'original-alt',
        thumbnailAlt: 'thumbnail-alt',
        thumbnailLabel: 'Optional',
        description: 'Optional description...',
        srcSet: 'Optional srcset (responsive images src)',
        sizes: 'Optional sizes (image sizes relative to the breakpoint)'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]
		return (
			<div>
			<ImageGallery
			ref={i => this._imageGallery = i}
			items={images}
			slideInterval={2000}
			onImageLoad={this.handleImageLoad} showBullets={true}/>
			</div>
		);
	}
}

export default Home;
