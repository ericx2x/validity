import React from 'react';

var fs = require('fs');
import csvString from './files/normal.csv';
const csvFilePath = './files/normal.csv'
const csv = require('csvtojson')

class DisplayCsv extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            jsonArray: []
        };
    }

    componentDidMount(){
        
        
        csv()
            .fromString(csvString)
            .then((jsonObj) => {
                console.log(jsonObj);
                /**
                 * [
                 * 	{a:"1", b:"2", c:"3"},
                 * 	{a:"4", b:"5". c:"6"}
                 * ]
                 */
            })

        // Async / await usage
        async function getCsv(){
            const jsonArray = await csv().fromString(csvFilePath);
            this.setState({
                jsonArray: jsonArray,
            });
        }
        
        getCsv();
        
    }
    
    render(){
        return (
            <div className="App">
                {this.state.jsonArray}
            </div>
        );
    }
}

export default DisplayCsv;