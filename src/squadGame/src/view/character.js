import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Gnome1 from './Components/Characters/Gnome1';
import Gnome2 from './Components/Characters/Gnome2';
import Blonde from './Components/Characters/Blonde';
import Brunette from './Components/Characters/Brunette';
import Drone1 from './Components/Characters/Drone1';
import Drone2 from './Components/Characters/Drone2';
import Drone3 from './Components/Characters/Drone3';
import BlackCar from './Components/Characters/CarBlack';
import BlueCar from './Components/Characters/CarBlue';
import OrangeCar from './Components/Characters/CarOrange';
import WhiteCar from './Components/Characters/CarWhite';
import config from '../simulation/config.json';
import { observer } from 'mobx-react';

class Bot extends Component {
  static contextTypes = {
    scale: PropTypes.number
  };
  constructor() {
    super();
  }
  render() {
    switch (this.props.type) {
      case 'gnome1':
        return <div>
          <Gnome1
            gameId={this.props.gameId}
            charId={this.props.charId}
            store={this.props.store}
            scale={this.context.scale}
            size={config.playerSize}
          />
        </div>;
      case 'gnome2':
        return <div>
          <Gnome2
            gameId={this.props.gameId}
            charId={this.props.charId}
            store={this.props.store}
            scale={this.context.scale}
            size={config.playerSize}
          />
        </div>;
      case 'blonde':
        return <div>
          <Blonde
            gameId={this.props.gameId}
            charId={this.props.charId}
            store={this.props.store}
            scale={this.context.scale}
            size={config.playerSize}
          />
        </div>;
      case 'brunette':
        return <div>
          <Brunette
            gameId={this.props.gameId}
            charId={this.props.charId}
            store={this.props.store}
            scale={this.context.scale}
            size={config.playerSize}
          />
        </div>;
      case 'drone1':
        return <div>
          <Drone1
            gameId={this.props.gameId}
            charId={this.props.charId}
            store={this.props.store}
            scale={this.context.scale}
            size={config.playerSize}
          />
        </div>;
      case 'drone2':
        return <div>
          <Drone2
            gameId={this.props.gameId}
            charId={this.props.charId}
            store={this.props.store}
            scale={this.context.scale}
            size={config.playerSize}
          />
        </div>;
      case 'drone3':
        return <div>
          <Drone3
            gameId={this.props.gameId}
            charId={this.props.charId}
            store={this.props.store}
            scale={this.context.scale}
            size={config.playerSize}
          />
        </div>;
      case 'black-car':
        return <div>
          <BlackCar
            gameId={this.props.gameId}
            charId={this.props.charId}
            store={this.props.store}
            scale={this.context.scale}
            size={config.playerSize}
          />
       </div>;
      case 'blue-car':
        return <div>
          <BlueCar
            gameId={this.props.gameId}
            charId={this.props.charId}
            store={this.props.store}
            scale={this.context.scale}
            size={config.playerSize}
          />
      </div>;
      case 'orange-car':
        return <div>
          <OrangeCar
            gameId={this.props.gameId}
            charId={this.props.charId}
            store={this.props.store}
            scale={this.context.scale}
            size={config.playerSize}
          />
       </div>;
      case 'white-car':
        return <div>
          <WhiteCar
            gameId={this.props.gameId}
            charId={this.props.charId}
            store={this.props.store}
            scale={this.context.scale}
            size={config.playerSize}
          />
       </div>;
      default:
        return <div>
          <Gnome1
            gameId={this.props.gameId}
            charId={this.props.charId}
            store={this.props.store}
            scale={this.context.scale}
            size={config.playerSize}
          />
        </div>;
    }
  }
}
export default observer(Bot);