deleteTexts = document.getElementsByClassName("delete")
for ( i = 0; i < deleteTexts.length; i++ ) {
    var deleteText = deleteTexts[i]
    deleteText.addEventListener("click",(e) => {
        textDele = e.target;
        divParent = textDele.parentNode;
        divParent.remove();
    })
}