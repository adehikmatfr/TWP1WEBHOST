let clock = {
    time: '',
    date: ''
};

let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
let timerID = setInterval(updateTime, 1000);
updateTime();

function updateTime() {
    let cd = new Date();
    clock.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
    clock.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth() + 1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];

    // Update the HTML elements
    document.getElementById('time').innerText = clock.time;
    document.getElementById('date').innerText = clock.date;
}

function zeroPadding(num, digit) {
    let zero = '';
    for (let i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}

function getQueryParams() {
    let params = {};
    let queryString = window.location.search.slice(1);
    let queryArr = queryString.split("&");

    for (const element of queryArr) {
        let pair = element.split("=");
        let key = decodeURIComponent(pair[0]);
        let value = decodeURIComponent(pair[1] || '');
        params[key] = value;
    }

    return params;
}

function setFieldValue() {
    let queryParam = getQueryParams()
    document.getElementById('login-name').value = queryParam?.name || 'default';
    document.getElementById('login-email').value = queryParam?.email || 'default';
}
setFieldValue()