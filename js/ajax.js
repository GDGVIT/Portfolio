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
                        <p class="text-left">${obj[i].name}</p>
                        <a href="${obj[i].link}" class="image" target="_blank">
                        <img src="${obj[i].image}" alt="${obj[i].name}" class="img">
                        </a>`)
                    } else {
                        $('#links').append(`
                        <p class="text-left">${obj[i].name}</p>
                        <a href="${obj[i].link}" class="image" target="_blank">
                        <img src="${obj[i].image}" alt="${obj[i].name}" class="img">
                        </a>`)
                    }
                }
            }
        }
    }
}
