const volumeOfCylinder = cylinder => {
    cylinder.volume = (Math.PI * cylinder.r**2 * cylinder.h).toFixed(4);
    return cylinder.volume
}

console.log('Volume of Cylinder = ', volumeOfCylinder({r: 14, h: 10}));