 class mywebsocket {
   constructor(wsurl) {
       const BrowserWebSocket = window.WebSocket || window.MozWebSocket
       this._websocket = new BrowserWebSocket(wsurl || 'ws://0.0.0.0:3000//ws/')
       this.callId=0;  
   }
   subscribeKline(params, callback) {
      this.callId++;
       if (this.ws.readyState) { 
         this.ws.send(JSON.stringify({ping:'ping'}))
       } else {
         this.ws.onopen = evt => { 
          this.ws.send(JSON.stringify({
            ping: 'ping'
          }))
         }
       }
      
       this.ws.onmessage = e => {  
         callback(JSON.parse(e.data))
       } 
       this.ws.onclose = function (evt) {
         console.log('WebSocketClosed!');
       };
       this.ws.onerror = function (evt) {
         console.log('WebSocketError!');
        this.ws.terminate();
       };
        // this.ws.on('ping', (_d) => {
        //     this.ws.pong(_d);
        // });
        // this.ws.on('pong', (_d) => {
        //   this.ws.ping(_d);
        // });
       const interval = setInterval(() => {
         if (this.ws.readyState > 1) this.ws.terminate();
        //  this.ws.ping(new Date().getTime(), function () {});
       }, 1000);
   }
 }

 export default mywebsocket