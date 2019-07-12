window.onload = function loaderDisabler() {
        setTimeout(function() {
            let loader = document.getElementById('loader');
            loader.style.display = "none";
        }, 3000)
    } // time in seconds when loader should dissapear