import React, { Component } from 'react'

export class Typewriter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            wordArr : ['LOVE', 'LIFE', 'EMOTION'],
            elementIndex : 0,
            isDeleting : false,
            txt : ''
        }
    }
    componentDidMount(){
        this.type();
    }
    type = () => {
        
        const current = this.state.elementIndex % this.state.wordArr.length ;
        let currentWord = this.state.wordArr[current] ;
        let typeSpeed = 500

        if(this.state.isDeleting){
            this.setState({
                txt : currentWord.substring(0, this.state.txt.length - 1)
            })
            
        } else{
            this.setState({
                txt : currentWord.substring(0, this.state.txt.length + 1)
            })
        }

        if(!this.state.isDeleting === true && this.state.txt === currentWord){
            this.setState({
                isDeleting : true
            })
            typeSpeed = 3000;
        } else if(this.state.isDeleting && this.state.txt === ''){
            this.setState({
                isDeleting : false,
                elementIndex : this.state.elementIndex + 1 
            })

        }
        if(this.state.isDeleting){
            typeSpeed /= 3 ;
        }  
    setTimeout(() => {
        this.type();
    }, typeSpeed); 

    }
    
    render() {
        return (
            <div className="container">
                <h1>Briyani Is&nbsp;<span className="changing-text"><span className = 'txt'> {this.state.txt}</span></span></h1>
                <h3>Briyani Is Not Just A Word </h3>
            </div>
        )
    }
}

export default Typewriter
