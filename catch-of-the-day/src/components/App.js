import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';



class App extends React.Component {
  //When app component initializes we need to tell it to initiate with fish state and order state. W e do this with a constructor method.
  constructor() {
    super();

    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);

    //this is the initial state or getinitialstate
    this.state = {
      fishes:{},
      order: {}
    };
  }

  addFish(fish) {
    //update the state
    //best practice-take copy of the state
    //this.state.fishes is the existing data state
    //... spreading will take every item gtom the object and spread it into the object. (Takes copy of the state and puts it in this new instance of fishes below)
    const fishes= {...this.state.fishes};
    //this.state.fishes.fish1=fish; this is a form of updating the state(not best practice)

    //add in the new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    //set the state
    // pass solely the state that needs to be updated
    this.setState({ fishes });
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    });
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" test="testing props in app"/>
          <ul className="list-of-fishes">
            {
              Object
              .keys(this.state.fishes)
              .map(key=> <Fish key={key} details={this.state.fishes[key]} />)
            }
          </ul>
        </div>
        <Order />
        <Inventory addFish = {this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }
}

export default App;
