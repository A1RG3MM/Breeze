document.addEventListener("DOMContentLoaded", function () {
    var is24HourFormat = localStorage.getItem('clockType') === '24Hour';
  
    function updateClock() {
        var now = new Date();
        var hr = now.getHours();
        var min = now.getMinutes();
        var sec = now.getSeconds();
    
        if (!is24HourFormat) {
            var meridian = hr >= 12 ? 'PM' : 'AM';
            hr = hr % 12;
            hr = hr ? hr : 12;
        } else {
            var meridian = '';
            hr = hr < 10 ? '0' + hr : hr;
        }
    
        min = min < 10 ? '0' + min : min;
        sec = sec < 10 ? '0' + sec : sec;
    
        var timeString = hr + ':' + min + ':' + sec + ' ' + meridian;
        document.getElementById('clock').innerHTML = timeString;
    }
    
    updateClock();
    setInterval(updateClock, 1000);
  });