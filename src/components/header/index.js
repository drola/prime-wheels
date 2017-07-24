import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>Factorization wheels</h1>
				<nav>
					<Link activeClassName={style.active} href="/">2-3-5</Link>
					<Link activeClassName={style.active} href="/210">2-3-5-7</Link>
				</nav>
			</header>
		);
	}
}
