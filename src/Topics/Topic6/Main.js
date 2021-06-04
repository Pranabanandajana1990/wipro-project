import React, { Component } from 'react';

class Topicsix extends Component {
    static defaultProps = {
        companyName: "Wipro",
        companyLocation: "Bangalore"
    }

    render() {
        return (
            
              <h4>
                Hi My name is Pranab, I'm working at {this.props.companyName} , {this.props.companyLocation}.
              </h4>
            
        )
    }
}

export default Topicsix;