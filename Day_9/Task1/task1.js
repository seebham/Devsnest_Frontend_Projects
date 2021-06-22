const cylinder1 = {
    r: 20,
    calVolume: function (h) {
        let vol = (Math.PI * (this.r*this.r) * h).toFixed(2);
        console.log(`Volume of Cylinder of radius ${this.r} and height ${h} is: ${vol}`);
    }
}

const cylinder2 = {
    r: 30
}

//Simple call of calArea()
cylinder1.calVolume(10);

//.call()
cylinder1.calVolume.call(cylinder2, 20);

//.apply
cylinder1.calVolume.apply(cylinder2, [30]);

//.bind()
const VolumeFunc = cylinder1.calVolume.bind(cylinder2, 5);
VolumeFunc();