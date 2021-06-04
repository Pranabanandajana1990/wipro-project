import React,{Component} from 'react';


class Topicnine extends Component {

    componentDidMount() {
        console.log("After the componet Mounted")
    }
    componentWillMount() {
        console.log("Hi I m First")
    }
    componentWillUnmount() {
        console.log("After the componet is unmounted")
    }
    render() {
        return (
            <>
                <p>Reload the Page Again to see the Component Lifecycle steps</p>
                <div id="para" onClick={() => { document.getElementById('para').remove() }}>
                    If you think you are beaten, you are. If you think you dare not, you don’t. If you like to win, but think you can’t. It’s almost a cinch you won’t. If you think you’ll lose, you’re lost, For out in the world we find. Success begins with a fellow’s will. It’s all a state of mind. Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.
                </div>
            </>
        )
    }
}

export default Topicnine;