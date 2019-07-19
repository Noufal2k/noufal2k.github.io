import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <div style={
                { border: '1px solid skyblue', borderRadius: '5px',
                display:'flex', flex:'0 80%', justifyContent: 'space-around' }
                }>
                <div> Project 1 </div>
                <div> Project 2 </div>
                <div> Project 3 </div>
            </div>
        );
    }
}

export default Projects;