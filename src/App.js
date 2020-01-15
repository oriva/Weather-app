import React from "react";
import Hp from "./components/hp";
import Button from "./components/button";

class App extends React.Component {
    state = {
        hp: 1000,
        money: 0
    }

    getAttack = (e) => {
        let newhp = this.state.hp - 2;
        this.setState({
            hp: newhp
        });
    }

    render() {
        return (
            <div>
                <Hp hp={this.state.hp}/>
                <Button goAttack={this.getAttack}/>
            </div>
        );
    }
}

export default App;