import './SeasonDisplay.css';
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spiner from './Spiner';

// const App = () => {
    
//     return <div>Hi there!</div>;
// };

class App extends React.Component{

    // primero en ejecutarse
    // constructor(props){
    //     super(props);
    //     this.state = {lat:null,errorMessage:''};
    // }
    
    state = {lat:null,errorMessage:''}; // otra manera de inicializar los states

    renderContent(){
        
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <Spiner message='Please accept location request'/>
    }

    render(){
        return this.renderContent();
    }

    // Segundo en ejecutarse 
    componentDidMount(){
        // Api para saber la localizacion del usuario
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat:position.coords.latitude}),
            (err) => this.setState({errorMessage:err.message})
        );
    }

    // Se ejecuta cada vez que el componente se acutaliza
    componentDidUpdate(){
        console.log('My component was just updated - it rerendered');
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);

// class Clock extends React.Component {
//     state = {time:null};
//     componentDidMount() {
//         setInterval(() => {
//             this.setState({time: new Date().toLocaleTimeString()});    
//         }, 1000)
//     }
    
//     render() {
//         return (
//             <div className="time">
//                 The time is: {this.state.time}
//             </div>
//         );
//     }
// }