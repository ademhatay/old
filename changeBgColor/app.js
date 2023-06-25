const body = document.getElementById('root');
const change = document.getElementById("change");
// const colors = ['danger', 'success', 'primary', 'warning', 'info', 'dark'];
const colors = {
    0: 'danger',
    1: 'success',
    2: 'primary',
    3: 'warning',
    4: 'info',
    5: 'dark',
    6: 'light',
    7: 'white',
    8: 'secondary',
}

let changeBg = change.addEventListener('click', () => {
    let random = Math.floor(Math.random() * 9);
    
    body.className = `d-flex justify-content-center align-items-center bg-${colors[random]}`;

    if (body.className === 'd-flex justify-content-center align-items-center bg-primary') {
        change.className = "btn btn-secondary";
    } else {
        change.className = "btn btn-primary";
    }
})