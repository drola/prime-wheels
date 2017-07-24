import { h, Component } from 'preact';
import Header from './header';
import Wheel from './wheel';
import {Router, Redirect} from 'preact-router';

export default class App extends Component {
	render() {
		return (
			<div id="app">
				<Header />
				<Router>
					<Wheel path="/:mod"></Wheel>
					<div default>
						<Wheel mod="30"></Wheel>
					</div>
				</Router>
			</div>
		);
	}
}
