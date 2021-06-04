import React,{ Component } from 'react';
import PropTypes from 'prop-types';

class Topicseven extends Component{
  static defaultProps = 
  {
    Name: "Steve",
    Preferred_cities: ["Bangalore", "Chennai"],
    Age: 18
  }

  render()
  {
    return(
    <h3>

    Hi My name is {this.props.Name}, I am {this.props.Age} years old,
    My Preferred cities are {this.props.Preferred_cities.join(",")}.
   
    </h3>
    

    )
  }
}

Topicseven.propTypes = {
    name: PropTypes.string,
    Preferred_cities: PropTypes.arrayOf(PropTypes.string),
    age: PropTypes.number
}

export default Topicseven;