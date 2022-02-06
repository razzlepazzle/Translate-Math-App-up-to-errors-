import React, { Component } from 'react';
import n2words from 'n2words';


export default class Spanish extends Component {
    constructor(){
        super();

        this.state={
            languageTitle: "Spanish"
        }
    }
    render() {

        var n2words = require('n2words');

        const {valueOne, valueTwo,
            valueAnswer, operation
        } = this.props;

        const spanishOne = n2words(valueOne, {lang: 'es'});
        const spanishTwo = n2words(valueTwo, {lang: 'es'});
        const spanishAnswer = n2words(valueAnswer, {lang: 'es'})
        
        
        const { languageTitle, 
            // operation 
        } = this.state;

        console.log("spanish component", valueOne)

        return (
            <div>
                <h2>{languageTitle} translation</h2>

                <div>
                {spanishOne} {operation} {spanishTwo} = {spanishAnswer}


                </div>
            </div>
        );
    }
}