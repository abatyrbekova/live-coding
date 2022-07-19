import { Component } from "react";
import axios from 'axios'

export default class App extends Component {

    state = {
        counter: 0
    }

    async componentDidMount() {
        
        const response = await axios.get('/posts/list')
        console.log('response from CLAss', response)

    }

    componentDidUpdate() {
        console.log('Hey, this component got updated')
    }

    render() {
        return <div>Hello from Class
            counter is 
            {
                this.state.counter
            }
<button onClick={() => this.setState({counter: this.state.counter + 1})}>Class Increase</button>
        </div>
    }
}