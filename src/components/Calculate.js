import React, { Component } from 'react';
import CalcDisplay from './CalcDisplay';

class Calculate extends Component {
	state = {
		data: ''
	};

	handleChange = e => {
		const currentLength = this.state.data.toString().length;
		let current = '';
		let update = '';
		let input = e;

		if (currentLength === 0) {
			current = '';
			update = input;
		} else if (currentLength > 0 && currentLength < 20) {
			current = this.state.data.toString().slice(0);
			update = current.toString() + input.toString();
		} else if (currentLength === 20) {
			input = '';
			update = this.state.data;
		}
		this.setState({
			data: update
		});
	};

	delete = () => {
		const deleted = this.state.data
			.toString()
			.slice(0, this.state.data.toString().length - 1);
		this.setState({
			data: deleted
		});
	};

	clearInput = () => {
		this.setState({
			data: ''
		});
	};

	evaluate = () => {
		let expression = this.state.data;
		let answer = '';

		try {
			eval(expression);
		} catch (error) {
			if (error instanceof SyntaxError) {
				answer = 'Bad syntax!';
			}
		} finally {
			if (answer.length === 0) {
				answer = eval(expression);
			}
		}
		this.setState({
			data: answer
		});
	};
	render() {
		return (
			<div>
				<div className="calcWrapper">
					<div className="case">
						<p className="title">React Calculator</p>
						<input
							className="inputField"
							type="text"
							value={this.state.data}
							readOnly
						/>
						<CalcDisplay
							input={this.handleChange.bind(this)}
							delete={this.delete.bind(this)}
							clear={this.clearInput.bind(this)}
							enter={this.evaluate.bind(this)}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Calculate;
