function cooking(done){
    this.doneness = done
  }

function SpaceCar(speed, space_capable, seats, number_of_robot_servants) {
  this.speed = speed;
  this.space_capable = space_capable;
  this.seats = seats;
  this.number_of_robot_servants = number_of_robot_servants

  SpaceCar.prototype.toString = function() {
    return "Check out my awesome SpaceCar, it is " + this.speed + " with " + this.seats + " seats and it has " + this.number_of_robot_servants + " robot onboard."
  };
}

var super_delorian = new SpaceCar("lightning-fast", true, 4, 0);
var x_wing = new SpaceCar("hyundai", true, 2, 1)

console.log(x_wing.toString() );
