document.addEventListener('DOMContentLoaded', () => {
const picker = datepicker(document.querySelector('#birthdate'),{
    onSelect: instance => {
        //show which date was selected
        console.log(instance.dateSelected)
    },
    onShow: instance => {
        console.log('Calender showing.')
    },
    onHide: instance => {
        console.log('Calender hidden.')
    },
    onMonthChange: instance => {
        // Show the month of the selected date.
        console.log(instance.currentMonthName)
    },
    
    // Customizations
    formatter: (input, date, instance) => {
        input.value = date.toDateString()
    },
    position: 'tr',
    startDay: 1,

    // Settings
    alwaysShow: false,
    dateSelected: new Date,
    maxDate: new Date(2030, 0, 1),
    minDate: new Date(1900, 0, 1),
    startDate: new Date(), // This month
})
// Button functionality
document.querySelector('#submit').addEventListener('click', function(event) {
event.preventDefault() // Prevent default form submission
calculateAge();
})
function calculateAge() {
    const birthDate = new Date(document.querySelector('#birthdate').value);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth();
    const birthMonth = birthDate.getMonth();

    if (month < birthMonth || (month === birthMonth && today.getDate() < birthDate.getDate())) {
        age--;
    }

    // Display the calculated age in the #age-result div
    document.querySelector('#age-result').innerHTML = `You are ${age} years old`;
}
})

