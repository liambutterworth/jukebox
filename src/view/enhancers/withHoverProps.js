import React, { Component } from 'react';

function withHoverProps( WrappedComponent ) {
	return class extends Component {
		constructor( props ) {
			super( props );

			this.state = {
				isHovered: false,
			};

			this.handleMouseOver = this.handleMouseOver.bind( this );
			this.handleMouseOut  = this.handleMouseOut.bind( this );
		}

		handleMouseOver() {
			this.setState( { isHovered: true } );
		}

		handleMouseOut() {
			this.setState( { isHovered: false } );
		}

		render() {
			return (
				<WrappedComponent
					handleMouseOver={ this.handleMouseOver }
					handleMouseOut={ this.handleMouseOut }
					{ ...this.state }
					{ ...this.props }
				/>
			);
		}
	};
}

export default withHoverProps;
