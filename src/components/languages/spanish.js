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

        const one = n2words(123);
        const three = n2words(123, {lang: 'es'}) ;
        
        const { languageTitle } = this.state
        return (
            <div>
                    <h2>{languageTitle} translation</h2>
                    
                <div>
                    {one}
                </div>

                <div>
                    {three}
                </div>
            </div>
        );
    }
}