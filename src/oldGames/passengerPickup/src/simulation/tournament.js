import React, { Component } from 'react';
let tournamentSimulate = require('./test');

class Tournament extends Component {
    constructor(){
        super();
        this.state = {
            presult:"",
            showTable:true
        }
    }
    render() {
        return (
            <div>
            <div class="center-align">
                <button class="control-btn active"  onClick={()=>{
                    tournamentSimulate.default().then((result)=>{
                        this.setState({presult : result, showTable: true});
                    });
                }}
                >Run tournament</button>
                <button class="control-btn active" onClick={()=>{
                    this.setState({showTable: !this.state.showTable});
                }}>Hide tournament</button>
                </div>
                {
                    this.state.showTable && <p dangerouslySetInnerHTML={{__html: this.state.presult}} />
                }
            </div>
        );
      }
}
export default Tournament;