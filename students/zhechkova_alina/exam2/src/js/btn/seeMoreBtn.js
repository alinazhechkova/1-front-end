const smBtn = document.getElementById('seeMoreBtn');

function getPhoto(response) {
    let html = ``;
    response.forEach(photo => {
        html += `<img src=${photo.urls.raw} alt=${photo.alt_description} class="col-6 ajax-photo col-md-12">`
    });
    const div = document.getElementById('ajaxWrap');
    div.insertAdjacentHTML('beforeend', html)
}

smBtn.addEventListener('click', function () {
    return ajaxGet("https://api.unsplash.com/photos/random/?count=4&client_id=cpnwAlnMv_WQLAZD4dS3j9dNZIwN8NYCx8ByylfYd_c", function (data) {
        return getPhoto(JSON.parse(data));
    })
})


function ajaxGet(url, callback) {
    let xmlhttp = new XMLHttpRequest();
    let data
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            try {
                data = xmlhttp.responseText;
            } catch (err) {
                console.error(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
