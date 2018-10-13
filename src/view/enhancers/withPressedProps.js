import React, { Component } from 'react';

function withPressedProps( WrappedComponent ) {
	return class extends Component {
		constructor( props ) {
			super( props );

			this.state = {
				isPressed: false,
			};

			this.handleMouseDown = this.handleMouseDown.bind( this );
			this.handleMouseUp   = this.handleMouseUp.bind( this );
		}

		handleMouseDown() {
			this.setState( { isPressed: true } );
		}

		handleMouseUp() {
			this.setState( { isPressed: false } );
		}

		render() {
			return (
				<WrappedComponent
					handleMouseDown={ this.handleMouseDown }
					handleMouseUp={ this.handleMouseDown }
					{ ...this.state }
					{ ...this.props }
				/>
			);
		}
	};
}

export default withPressedProps;
