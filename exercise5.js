class Device{
  constructor(name, powerConsumption, turn){
    this.name = name;
    this.powerConsumption = powerConsumption;
    this.turn = turn;
  }
  
  turnOnOff(){
    if (this.turn === 'on') {
      this.turn = 'off'
      console.log(`Устройство ${this.name} выключено`);
    } else {
      this.turn = 'on'
      console.log(`Устройство ${this.name} включено`);
    }
  }
}

class SmartDevice extends Device {
  constructor(diagonal, name, powerConsumption, turn){
    super(name, powerConsumption, turn);
    this.diagonal = diagonal;
  }
}

class StupidDevice extends Device{
  constructor(name, powerConsumption, turn){
    super(name, powerConsumption, turn)
  }

  brightnessValue(brightness){
    console.log(`This device is ${brightness}`);
  }
}

const computer = new SmartDevice(21, 'computer', 80, 'off')
const laptop = new SmartDevice(15, 'laptop', 70, 'off')
const deskLamp = new StupidDevice('desk lamp',10, 'off')

console.log(computer);
console.log(laptop);
console.log(deskLamp);

deskLamp.brightnessValue('very brightness')
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
  console.log(`Общее энергопотребление ${value} ватт`);
}

powerSum([computer, laptop, deskLamp])