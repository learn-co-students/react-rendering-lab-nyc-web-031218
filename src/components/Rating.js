import React from 'react';

class Rating extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      increasing: false,
      decreasing: false
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.rating === prevState.rating) {
      return {
        rating: nextProps.rating,
        increasing: false,
        decreasing: false
      }
    }
    return {
      rating: nextProps.rating,
      increasing: nextProps.rating > prevState.rating,
      decreasing: nextProps.rating < prevState.rating
    }
  }

  render() {
    let trend = 'stable';
    if (this.state.increasing) {
      trend = 'increasing';
    } else if (this.state.decreasing) {
      trend = 'decreasing';
    }

    return (
      <div>
        <p>Rating: {this.props.rating}</p>
        <p>Trend: {trend}</p>
      </div>
    )
  }
}

export default Rating;
