import React from "react"; //es6
//const reacter = require("react") //es5

export class OldSchoolComponent extends React.Component
{
    constructor(props){
        super(props);
        this.state = {seconds:0};
    }

    cambiarSegundo(){
        this.setState({seconds:this.state.seconds +1});
    }

    mostrarMensaje(){
        return "Fox Mulder";
    }

    //Cuando Carga
    componentDidMount(){
        this.interval = setInterval(() => this.cambiarSegundo(), 1000);
    }
    //Cuando Descarga
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        return <div><p>The coolest component in the world</p> 
        <p><img alt = "Fox Mulder"src = "https://vignette.wikia.nocookie.net/x-files/images/4/48/Fox-Mulder.jpg/revision/latest/scale-to-width-down/350?cb=20160113214135&path-prefix=es"/></p>
        <h1>{this.mostrarMensaje()}</h1>
    <h2>Segundos:{this.state.seconds}</h2>
        </div>
    }
}
 
export const HolaMundo = () => <p>Hola Mundo</p>;