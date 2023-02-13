import React from 'react';

export class GuineaPigs extends React.Component {
    render () {
        return (
            <div>
                <h1>Guinea Pigs</h1>
                <img src = {this.props.src} />
                <h1>HELLO</h1>
            </div>
        )
    }
}