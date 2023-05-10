function Device(name, powerConsumption){
  this.name = name;
  this.powerConsumption = powerConsumption;
}
Device.prototype.switchingDevice = function(turn){
  if (turn == 'on'){
    return this.powerConsumption;
  } else {
    return 0
  }
}

SmartDevice.prototype = new Device();
StupidDevice.prototype = new Device();

function SmartDevice(name, diagonal){
  this.name = name;
  this.diagonal = diagonal;
}

function StupidDevice(name){
  this.name = name;
}
StupidDevice.prototype.brightness = function(brightness) {
  console.log(`This device is ${brightness}`);
}

const computer = new SmartDevice('computer', 21)
const laptop = new SmartDevice('laptop', 15)
const deskLamp = new StupidDevice('desk lamp')

console.log(computer);
console.log(laptop);
computer.switchingDevice('on')
laptop.switchingDevice('off')
deskLamp.switchingDevice('on')
deskLamp.brightness('very brightness')