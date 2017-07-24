import { h, Component } from 'preact';
import style from '../style';

function is_prime(n)
{
  if (n <= 1)
  return false;

  if(n <= 3)
  return true;

  if(n%2 == 0 || n%3 == 0)
  return false;

  let i = 5;
  while (i * i <= n) {
    if (n % i == 0 || n % (i + 2) == 0) {
      return false;
    }
    i += 6;
  }
  return true;
}


export default class Number extends Component {
	render() {
		return (
			<div class={style.number + " " + (is_prime(this.props.number) ? style.prime : style.composite)}>
				{this.props.number}
			</div>
		);
	}
}
