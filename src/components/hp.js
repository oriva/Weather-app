import React from "react";

class Hp extends React.Component {
    render() {
        return (
            <div>
                <h2>HP</h2>
                <p>{ this.props.hp }</p>
            </div>
        );
    }
}

export default Hp;