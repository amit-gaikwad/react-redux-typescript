import React,{Component} from 'react';
import { connect } from "react-redux";
import axios from 'axios';
import { startAction } from "./actions/startAction";
import { stopAction } from "./actions/stopAction";
import logo from './logo.svg';
import './App.css';

type AppProps = {
  rotating?: boolean,
  stopAction? :any,
  startAction? : any
}
type AppState={
  cities: any
}

class App extends Component<AppProps, AppState>  {
  constructor(props:any){
    super(props);
    this.state= { cities: []};
    this.onLogoClick = this.onLogoClick.bind(this);
  }

  componentDidMount(){
    axios.get('http://demo0116564.mockable.io/cities').then((response : any)=>{
      this.setState({cities: response.data})
    })
  }

  onLogoClick(){
    if(this.props.rotating){
      this.props.stopAction();
    }else{
      this.props.startAction()
    } 
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          {
            this.state.cities.map((city: string)=>(
              <div>
                  {city}
              </div>
            ))
          }
          
          <img 
            src={logo} 
            className={
              "App-logo" + 
              (this.props.rotating ? "":" App-logo-paused")
            } 
            alt="logo"
          />
  
            <button  
              onClick={this.onLogoClick} >
                Toggle Moving Image
              </button>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );  
  }
}

const mapStateToProps = (state : any) => ({
  ...state
});

const mapDispatchToProps = (dispatch: any) => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction)
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
