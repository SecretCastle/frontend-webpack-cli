const promiseDom = () => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve('hello world, fuck');
		}, 0);
	});
};

const component = async () => {
	const res = await promiseDom();
	console.log(res);
};

component();
