import React, {Component} from "react";

class Topiceight extends Component {
    state = {
        count: 1, 
        num: 5, 
        result: []
    }

    generateTable = () => {
        const { num, count, result } = this.state;
        if (result.length >= 10) {
            return
        } else {
            let arr = [num, count, num * count]
            result.push(arr);

            this.setState({
                result: result,
                count: this.state.count + 1,
            })
        }

    };
    renderRows() {
        if (this.state.result.length > 0) {
            return this.state.result.map (function(o, i) {
                return (
                    <tr key={i}>
                        <td>
                            {o[0]} x {o[1]} =
                        </td>

                        <td>
                            {o[2]}
                        </td>
                    </tr>
                );
            });
        }

    }

    render() {
        return (
            <>
                <h3>Generate 5's Table</h3>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>{this.renderRows()}</tbody>
                </table>
                <button onClick={this.generateTable}>Click Me</button>

            </>

        )
    }
}
export default Topiceight;