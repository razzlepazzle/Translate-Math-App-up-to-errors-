import React, { Component } from 'react';
// import Default from "./languages/default";
import English from './languages/english';
import Spanish from "./languages/spanish";
import French from './languages/french';





class Translation extends Component {

    constructor(props){
        super(props); 

        this.state = {
            name: "language",
            showHideEnglish: false,
            showHideSpanish: false,
            showHideFrench: false
        }
        this.hideTranslation = this.hideTranslation.bind(this);
    }

hideTranslation(name){
    switch(name){
        case "showHideEnglish":
            this.setState({
                showHideEnglish: true,

                showHideSpanish: false,
                showHideFrench: false
            });
            break;
        case "showHideSpanish":
            this.setState({ 
                showHideSpanish: true,

                showHideEnglish: false,
                showHideFrench: false
            });
            break;
        case "showHideFrench":
            this.setState({ 
                showHideFrench: true,
                
                showHideEnglish: false,
                showHideSpanish: false
            });
            break;
        default:
            null;

    }
}

    

    

    render() {
        const {valueOne, valueTwo } = this.props;
        const {showHideEnglish, showHideSpanish, showHideFrench} = this.state
        
        return (

            <div className='language'>
                <div className='language-buttons'>
                    <button className="language-buttons__english" onClick={() => {this.hideTranslation("showHideEnglish")}}>
                        English
                    </button>
                    <button className='language-buttons__french' onClick={() => {this.hideTranslation("showHideFrench")}}>
                        French
                    </button>
                    <button className='language-buttons__spanish' onClick={() => {this.hideTranslation("showHideSpanish")}}>
                        Spanish
                    </button>

                </div>



            <div className = "translation__view">
                {showHideEnglish && <English className="translation__view-english" valueOne={valueOne} valueTwo={valueTwo}/>}
                {showHideFrench && <French className="translation__view-french" valueOne={valueOne} valueTwo={valueTwo}/>}
                {showHideSpanish && <Spanish className="translation__view-spanish" valueOne={valueOne} valueTwo={valueTwo}/>}
            </div>
            </div>
        );
    }
}

export default Translation











// class Translation extends Component {

//     constructor(props){
//         super(props)
//     }
    
//     render() {
//            const {valueOne, valueTwo} = this.props;
//         return (

//             <div>
               
//                    Show translation here
//                     <Switch>
//                         {/* <Route exact path ="/" component={Default} /> */}
//                         <Route path="/english" component={English} valueOne={valueOne}/>
//                         <Route path="/spanish" component={Spanish} />
//                         <Route path="/french" component={French} />


//                     </Switch>

//             </div>
//         );
//     }}

//     export default Translation;