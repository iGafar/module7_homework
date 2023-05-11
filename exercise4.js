function Device(name, powerConsumption, turn){
  this.name = name;
  this.powerConsumption = powerConsumption;
  this.turn = turn;
}
Device.prototype.turnOnOff = function(){
  if (this.turn === 'on') {
    console.log(`Устройство ${this.name} включено`);
  } else {
    console.log(`Устройство ${this.name} выключено`);
  }
}

SmartDevice.prototype = new Device();
StupidDevice.prototype = new Device();

function SmartDevice(name, powerConsumption, turn, diagonal){
  this.name = name;
  this.powerConsumption = powerConsumption;
  this.diagonal = diagonal;
  this.turn = turn;
}

function StupidDevice(name, powerConsumption, turn){
  this.name = name;
  this.powerConsumption = powerConsumption;
  this.turn = turn;
}
StupidDevice.prototype.brightness = function(brightness) {
  console.log(`This device is ${brightness}`);
}

const computer = new SmartDevice('computer', 80, 'on', 21)
const laptop = new SmartDevice('laptop', 70, 'off', 15)
const deskLamp = new StupidDevice('desk lamp',10, 'on')

console.log(computer);
console.log(laptop);
console.log(deskLamp);

deskLamp.brightness('very brightness')
computer.turnOnOff()
laptop.turnOnOff()
deskLamp.turnOnOff()

function powerSum(){
  let value = 0;
  if (computer.turn === 'on'){
    value += computer.powerConsumption;
  }
  if (laptop.turn === 'on'){
    value += laptop.powerConsumption;
  }
  if (deskLamp.turn === 'on'){
    value += deskLamp.powerConsumption;
  }
  console.log(value);
}
powerSum()