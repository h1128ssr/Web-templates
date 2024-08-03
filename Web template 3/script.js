let btnDownload = document.querySelector('button');
let img = document.querySelector('img');

btnDownload.addEventListener('click', () => {
    let imgPath = img.getAttribute('sec');
    let fileName = getFileName(imgPath);

    saveAs(imgPath, fileName);
});

function getFileName(str) {
    return str.substring(str.lastindexof('/') + 1);
}