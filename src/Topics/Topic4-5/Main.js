import React, { Component } from 'react';
import Details from './Details';
import Header from './Header';

class Topicfour extends Component {

    state = {
        studentDetails: [
            {
                studentName: "Pranab",
                studentId: 1,
                studentMarks: 400
            }, {
                studentName: "Sonu",
                studentId: 2,
                studentMarks: 414
            },
            {
                studentName: "Sushree",
                studentId: 3,
                studentMarks: 100
            },
            {
                studentName: "Koosum",
                studentId: 4,
                studentMarks: 524
            },
            {
                studentName: "Fergal",
                studentId: 5,
                studentMarks: 600
            }
        ]
    }

    render() {

        return (
            <>
                <>
                    <Header />
                    
                    <Details data={this.state.studentDetails} />

                </>
            </>
        )
    }
}

export default Topicfour; 