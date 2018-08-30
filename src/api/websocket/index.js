 
 import config from "../../config";
 import _websocket from './websocket'
 class mywebsocket {
  constructor() {
    this._websocket = new _websocket(config.wsURL || 'ws://localhost:8080')
    //  this._websocket2 = new _websocket(config.wsURL || 'ws://localhost:8080')
  } 
}

export default new mywebsocket()