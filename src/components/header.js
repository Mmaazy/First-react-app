import React from 'react';

class Header extends React.Component {
    constructor(props){
        super(props);

        this.state = {
                keywords:''
        }

        
    }

    inputChange(event){
        this.setState({keywords:event.target.value})
        this.props.newsSearch(event.target.value)
    }

    render(){
        return(
            <header>
                <div className="logosi" onClick={()=>console.log('user clicking')}>Logo</div>
                <input placeholder="Search" onChange={this.inputChange.bind(this)}/>
            </header>
        )
    }
}

export default Header;    