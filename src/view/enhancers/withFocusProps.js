import React, { Component } from 'react';

function withFocusProps( WrappedComponent ) {
	return class extends Component {
		constructor( props ) {
			super( props );

			this.state = {
				isFocused: false,
			};

			this.handleFocus = this.handleFocus.bind( this );
			this.handleBlur  = this.handleBlur.bind( this );
		}

		handleFocus() {
			this.setState( { isFocused: true } );
		}

		handleBlur() {
			this.setState( { isFocused: false } );
		}

		render() {
			return (
				<WrappedComponent
					handleFocus={ this.handleFocus }
					handleBlur={ this.handleFocus }
					{ ...this.state }
					{ ...this.props }
				/>
			);
		}
	};
}

export default withFocusProps;
