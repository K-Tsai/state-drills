import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count : 0,
    };
  }
  handleText () {
    const { count } = this.state
    console.log(count);
    if (count >= 8) {
      clearInterval(this.interval)
      return 'BOOM!!!!'
    } else if (this.state.count % 2 === 0){
      return 'tick'
    } else {
      return 'tock'
    }
  }
	componentDidMount() {
    this.interval = setInterval(() => {
      this.setState ({
        count : this.state.count + 1
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    return (
			<p>{this.handleText()}</p>
    )
  }
}

export default Bomb