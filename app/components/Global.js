import React from "react";
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import booksService from '../services/booksService';
import Gallery from './Gallery';
class Global extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			query: String,
			items: [],
			message: 'Find your favorite book.'
		}
	};

	render() {

		return (
			<div className="global">
			 <h2>Book Explorer !</h2>
			 <FormGroup>
			 	<InputGroup>
			 	 <FormControl
			 	  type="text"
			 	  placeholder="Search for a book"
			 	  onChange={event => this.setState({query: event.target.value})}
			 	  onKeyPress={event => {
			 	  	if(event.key === 'Enter') {
			 	  		this.search();
			 	  	}
			 	  }}
			 	  />
			 	 <InputGroup.Addon onClick={() => this.search()}>
			 	  <Glyphicon glyph="search"></Glyphicon>
			 	 </InputGroup.Addon>
			 	</InputGroup>
			 </FormGroup>
			 <Gallery items={this.state.items}/>
			</div>
		)
	}

	search() {
	var that = this;
		booksService.get(this.state.query)

		.then((data)=> {
			this.setState({
				items:data.items
			})
		})

		.catch((err) =>{
			if(err.message) {
				this.state.message = err.message;
			}
			// console.log(err);
		})
	}
}

export default Global;