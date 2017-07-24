import { h, Component } from 'preact';
import style from './style';
import Number from './number';

function range(from, to) {
	return (new Array(to - from)).fill(0).map((i, k) => k + from);
}

export default class Wheel extends Component {
	render() {
		let props = this.props;

		return (
			<div class={style.wheel}>
				<div style="white-space: nowrap;">
				  <div class={style.number + " " + style.index}></div>
				  {range(0, props.mod).map(c => <div class={style.number + " " + style.index}>{c}</div>)}
				</div>
				{range(0, 300).map(r =>
					<div style="white-space: nowrap;">
					  <div class={style.number + " " + style.index}>{r}</div>
						{range(0, props.mod).map(c => <Number number={r * props.mod + c + 2}></Number>)}
					</div>
				)}
			</div>
		);
	}
}
