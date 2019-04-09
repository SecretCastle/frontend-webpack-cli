import _ from 'lodash';
export function square(x) {
	return x * x;
}
  
export function cube(x) {
	console.log(_.join(['math', x]));
	return x * x * x;
}
