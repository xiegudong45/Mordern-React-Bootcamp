function getNum() {
	return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
	render() {
		const num = getNum();
		let msg;
		if (num === 7) {
			msg = 
				<div>
					<h2>Congrats!</h2>
					<img src="http://bravewords.com/medias-static/images/news/2018/5B885638-slash-says-he-ll-help-estranged-wife-with-ig-harassment-if-she-agrees-to-divorce-terms-image.jpg" />
				</div>
		} else {
			msg = <p>Sorry You Lose!</p>
		}
		return (
			<div>
				<h1>Your number is: {num}</h1>
				{msg}
			</div>
		);
	}
}