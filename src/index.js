import React from 'react';
import { render } from 'react-dom';
import state from 'state';
import { RootComponent, rootElement } from 'view';
import './index.css';

const store = state.configureStore( {} );
render( <RootComponent store={ store } />, rootElement );
