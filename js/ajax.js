// Display Sites
function loadSites() {
    var xh = new XMLHttpRequest();
    xh.open("GET", "../users.json", true)
    xh.setRequestHeader('Content-Type', 'application/json')
    xh.send()
    xh.onload = function () {
        if (this.status == 200) {
            var obj = JSON.parse(this.responseText)
            if (obj.length == 0) {
                $('#links').append(`
               <p>No Links Available. Please add a few links in users.json to get started.</p>
               `)
            } else {
                for (var i = 0; i < obj.length; i++) {
                    if (i === 0) {
                        $('#links').append(`
                        <a href="${obj[i].link}" class="iframe-anchor" target="_blank">
                        <div class="image">
                        <h2>${obj[i].name}</h2>
                        <iframe src="${obj[i].link}" frameborder="0" height="300px" width="300px">
                        </iframe>
                        </div>
                        </a>`)
                    } else {
                        $('#links').append(`
                        <a href="${obj[i].link}" class="iframe-anchor" target="_blank">
                        <div class="image">
                        <h2>${obj[i].name}</h2>
                        <iframe src="${obj[i].link}" frameborder="0" height="300px" width="300px">
                        </iframe>
                        </div>
                        </a>`)
                    }
                }
            }
        }
    }
}
