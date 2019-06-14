

// songContainer = document.getElementById("song_container");
// console.log(songContainer);

// songs = songContainer.getElementsByClassName("song");

// for( i = 0; i< songs.length; i++ ) {
//     console.log(songs[i])
//     console.log(songs[i].getElementsByClassName('title')[0].innerText);
//     console.log(songs[i].getElementsByClassName('artist')[0].innerText);
// }

//delete

textDeletes = document.getElementsByClassName("delete");
for (i = 0; i < textDeletes.length; i++) {
    var textDelete = textDeletes[i];
    textDelete.addEventListener("click", (e) => {
        textDele = e.target;
        divs = textDele.parentNode;
        divs.remove();
    })
}

//edit
textEdits = document.getElementsByClassName("edit");
for (i = 0; i < textEdits.length; i++) {
    var textEdit = textEdits[i];
    textEdit.addEventListener("click", (e) => {
        textEdi = e.target;
        divs = textEdi.parentNode;
        console.log(divs.getAttribute("song_id"));
    })
}

//more 
textMores = document.getElementsByClassName("more");
for (i = 0; i < textMores.length; i++) {
    textMore = textMores[i];
    textMore.addEventListener("click", (e) => {
        textMor = e.target;
        divs = textMor.parentNode;
        console.log("Tên: " + divs.getElementsByClassName("title")[0].innerHTML)
        console.log("Tác giả: " + divs.getElementsByClassName("artist")[0].innerHTML)
    })
}

//add
btnAdd = document.getElementById("add");
var songContainer = document.getElementById('song_container');
var exData = '';
btnAdd.addEventListener("click", () => {
    var dataAppend = `
        <div class="song" song_id="78ab12">
        <h4 class="title">hello</h4>
        <h5 class="artist">Maroon 5</h5>
        <i class="delete">Delete</i>
        <i class="edit">Edit</i>
        <i class="more">More</i>
        </div>
    `;
    var exData = songContainer.innerHTML;
    exData = exData.concat(dataAppend);
    songContainer.innerHTML = exData;
})
