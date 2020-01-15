import React from "react";

class Button extends React.Component {

    render() {
        return(
            <button onClick={this.props.goAttack}>Атаковать</button>
        );
    }
}

export default Button;