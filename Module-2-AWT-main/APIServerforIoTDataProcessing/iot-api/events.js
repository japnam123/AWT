const EventEmitter = require('events');

class IoTEventEmitter extends EventEmitter {}

const iotEvent = new IoTEventEmitter();

module.exports = iotEvent;
