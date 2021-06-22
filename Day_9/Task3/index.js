const totalSeats = prompt("Enter Total Number of Seats", 48 );
var bookedCount = 0;
var selectCount = 0;
var seatsBoxDiv = document.getElementById('seatsBox');
var avaiableCountDiv = document.getElementById('availableCount');
var bookedCountDiv = document.getElementById('bookedCount');
var selectedCountDiv = document.getElementById('selectCount');

const UpdateCounts = () => {
    bookedCountDiv.innerText = bookedCount;
    avaiableCountDiv.innerText = totalSeats - bookedCount - selectCount;
    selectedCountDiv.innerText = selectCount;
}

UpdateCounts();

for(let i = 1; i<=totalSeats; i++){
	let pixel = document.createElement('div');
	pixel.setAttribute('id', i)
	pixel.setAttribute('class', 'seat');
    if(Math.random() < 0.2) {
        bookedCount++;
        pixel.classList.add('booked');
    } else  {
        pixel.addEventListener('click', () => {
            if(pixel.classList.contains("selected")) {
                selectCount--;
                UpdateCounts();
            } else {
                selectCount++;
                UpdateCounts();
            }
            pixel.classList.toggle("selected");
        });
    }
	seatsBoxDiv.appendChild(pixel);
    UpdateCounts();
}