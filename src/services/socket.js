import socketio from 'socket.io-client';

const socket = socketio('http://192.168.0.104:3333', {
    autoConnect: false,
});
const subscribeToNewDevs = (subscribeFunction) => {
    socket.on('newDev', subscribeFunction);

}

const connect = ( latitude, longitude, techs) => {

    socket.io.opts.query = { 
        latitude,
        longitude,
        techs,
    }; 
    socket.connect();
    socket.on('message',  text => {
        console.log(text);
    });
}
const disconnet = () => {
    if(socket.connect){
        socket.disconnet();
    }
}
export {connect, disconnet, subscribeToNewDevs} ;