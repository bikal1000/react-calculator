import React, { Component } from 'react';

class CalcDisplay extends Component {
	render() {
		return (
			<div className="calcUI">
				<button
					className="numberBtn"
					onClick={this.props.input.bind(this, '7')}
				>
					7
				</button>
				<button
					className="numberBtn"
					onClick={this.props.input.bind(null, '8')}
				>
					8
				</button>
				<button
					className="numberBtn"
					onClick={this.props.input.bind(null, '9')}
				>
					9
				</button>
				<button
					className="operationBtn"
					onClick={this.props.input.bind(null, '/')}
				>
					/
				</button>
				<button
					className="numberBtn"
					onClick={this.props.input.bind(null, '4')}
				>
					4
				</button>
				<button
					className="numberBtn"
					onClick={this.props.input.bind(null, '5')}
				>
					5
				</button>
				<button
					className="numberBtn"
					onClick={this.props.input.bind(null, '6')}
				>
					6
				</button>
				<button
					className="operationBtn"
					onClick={this.props.input.bind(null, '*')}
				>
					*
				</button>
				<button
					className="numberBtn"
					onClick={this.props.input.bind(null, '1')}
				>
					1
				</button>
				<button
					className="numberBtn"
					onClick={this.props.input.bind(null, '2')}
				>
					2
				</button>
				<button
					className="numberBtn"
					onClick={this.props.input.bind(null, '3')}
				>
					3
				</button>
				<button
					className="operationBtn"
					onClick={this.props.input.bind(null, '+')}
				>
					+
				</button>
				<button className="delBtn" onClick={this.props.delete.bind(this)}>
					del
				</button>
				<button
					className="numberBtn"
					onClick={this.props.input.bind(null, '0')}
				>
					0
				</button>
				<button className="clearBtn" onClick={this.props.clear.bind(this)}>
					CE
				</button>
				<button
					className="operationBtn"
					onClick={this.props.input.bind(null, '-')}
				>
					-
				</button>
				<button onClick={this.props.enter.bind(this)} className="enterBtn">
					ENTER
				</button>
			</div>
		);
	}
}

export default CalcDisplay;
