function Device(name, powerConsumption, turn){
  this.name = name;
  this.powerConsumption = powerConsumption;
  this.turn = turn;
}
Device.prototype.turnOnOff = function(){
  if (this.turn === 'on') {
    this.turn = 'off'
    console.log(`Устройство ${this.name} выключено`);
  } else {
    this.turn = 'on'
    console.log(`Устройство ${this.name} включено`);
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

const computer = new SmartDevice('computer', 80, 'off', 21)
const laptop = new SmartDevice('laptop', 70, 'off', 15)
const deskLamp = new StupidDevice('desk lamp',10, 'off')

console.log(computer);
console.log(laptop);
console.log(deskLamp);

deskLamp.brightness('very brightness')
computer.turnOnOff() //включил
laptop.turnOnOff()   //включил
deskLamp.turnOnOff() //включил
deskLamp.turnOnOff() //выключил

function powerSum(arr){
  let value = 0;
  arr.forEach((item) => {
    if (item.turn === 'on'){
      value += item.powerConsumption
    }
  })
  console.log(value);
}

powerSum([computer, laptop, deskLamp])