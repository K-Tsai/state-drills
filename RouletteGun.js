import React from 'react';

class RouletteGun extends React.Component {
	static defaultProps = {
		bulletInchamber: 8
	};
	state = {
		chamber: null,
		spinningTheChamber: false,
	};
	componentWillUnmount() {
		clearTimeout(this.timeout)
	}
	handleButtonClick = () => {
		this.setState({
			spinningTheChamber: true,
		})
		this.timeout = setTimeout(() => {
			const random = Math.ceil(Math.random() * 8)

			this.setState({
				chamber: random,
				spinningTheChamber: false,
			})
		}, 2000)
	}

	displayText () {
		const {chamber, spinningTheChamber} = this.state
		const {bulletInChamber} = this.props
		if(spinningTheChamber) {
			return 'spinning the chamber and pulling the trigger! ...'
		}	else if(chamber === bulletInChamber) {
			return 'BANG!!!!!'
		} else {
			return 'you\'re safe!'
		}
	}

  render() {
    return (
			<div className = "rouletteGun">
				<p>{this.displayText()}</p>
				<button onClick= {this.handleButtonClick}>Pull the trigger!</button>
			</div>
    )
  }
}

export default RouletteGun