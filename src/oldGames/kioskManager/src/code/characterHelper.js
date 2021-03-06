import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { KeyListener } from 'react-game-kit';
import Drone1 from '../commonComponents/Characters/Drone1';
import Drone2 from '../commonComponents/Characters/Drone2';
import Drone3 from '../commonComponents/Characters/Drone3';
import Store from './store/plantSavior';
import Util from '../commonFuncs/index';
import { observer } from 'mobx-react';

class Character extends Component {
  static contextTypes = {
    loop: PropTypes.object,
    scale: PropTypes.number,
  };
  constructor(props) {
    super(props);
    this.loop = this.loop.bind(this);
    this.getPlant = this.getPlant.bind(this);
    this.getWater = this.getWater.bind(this);
    this.getPests = this.getPests.bind(this);
    this.keyListener = new KeyListener();
    document.addEventListener('keydown', (e) => {
      if (Store.currentControllable[this.props.gameId] == this.props.charId && Store.mode == 'play') {
        switch (e.key) {
          case this.props.keys.left:
            Store.changeDirection(this.props.gameId, this.props.charId, 'left');
            break;
          case this.props.keys.right:
            Store.changeDirection(this.props.gameId, this.props.charId, 'right');
            break;
          case this.props.keys.up:
            Store.changeDirection(this.props.gameId, this.props.charId, 'up');
            break;
          case this.props.keys.down:
            Store.changeDirection(this.props.gameId, this.props.charId, 'down');
            break;
          case this.props.keys.action:
            Store.switchPlayer(this.props.gameId);
            break;
          default:
            break;
        }
      }
    });
  }
  loop = () => {
    if (!document.getElementById('pl' + this.props.charId + '-' + this.props.gameId))
      return;
    var player = document.getElementById('pl' + this.props.charId + '-' + this.props.gameId).childNodes[0];
    var parentEl = document.getElementById('pl' + this.props.charId + '-' + this.props.gameId).parentElement;
    var direction = Store.direction[this.props.gameId][this.props.charId];
    if (Util.rect2parent(player, parentEl, direction) && Store.mode == 'play')
      Store.moveCharacter(this.props.gameId, this.props.charId);
    if (Store.mode == 'restart') {
      Store.restartCharacter(this.props.gameId, this.props.charId);
    }
  }
  componentDidMount() {
    this.loopID = this.context.loop.subscribe(this.loop);
  }
  componentWillUnmount() {
    this.context.loop.unsubscribe(this.loopID);
  }
  render() {
    switch (this.props.type) {
      case 'drone1':
        return <div id={'pl' + this.props.charId + '-' + this.props.gameId}>
          <Drone1
            position={Store.position[this.props.gameId][this.props.charId]}
            direction={Store.direction[this.props.gameId][this.props.charId]}
          />
        </div>;
      case 'drone2':
        return <div id={'pl' + this.props.charId + '-' + this.props.gameId}>
          <Drone2
            position={Store.position[this.props.gameId][this.props.charId]}
            direction={Store.direction[this.props.gameId][this.props.charId]}
          />
        </div>;
      case 'drone3':
        return <div id={'pl' + this.props.charId + '-' + this.props.gameId}>
          <Drone3
            position={Store.position[this.props.gameId][this.props.charId]}
            direction={Store.direction[this.props.gameId][this.props.charId]}
          />
        </div>;
      default:
        return <div id={'pl' + this.props.charId + '-' + this.props.gameId}>
            <Drone3
                position={Store.position[this.props.gameId][this.props.charId]}
                direction={Store.direction[this.props.gameId][this.props.charId]}
            />
        </div>;
    }
  }
}
export default observer(Character);