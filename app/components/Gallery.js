import React from 'react';

class Gallery extends React.Component {

	render() {
		return (

			<div className="galery">
			 {
			 	this.props.items.map((item, index) => {
			 		let {title, authors, imageLinks, previewLink} = item.volumeInfo;
			 		return (
			 			<div className="flex-col" key={index}>
			 			 <h2>{title}</h2>
			 			 <h4>By: {authors}</h4>
			 			 <a href={previewLink}>
			 			  <img src={imageLinks.thumbnail} alt="Book image"/>
			 			 </a>
			 			</div>
			 		)
			 	})
			 }
			</div>
		)
	}
}

export default Gallery;