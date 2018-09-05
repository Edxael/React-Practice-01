import React from 'react'
import './css/style.css'

export default class Main extends React.Component{

    changeClas(){
        console.log('Changing class')
    }

    render(){
        return(
            <div>

                <h2>Main Component</h2>
                <button>Click</button>
                <br/>

                <div className="blue1" >Test Text</div>

            </div>
        )
    }
}