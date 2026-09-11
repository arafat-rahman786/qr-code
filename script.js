let qrInput = document.getElementById("qrInput");
let size = document.getElementById("sizeSelect");
let qrPreview = document.getElementById("qrPreview");
let downloadBtn = document.getElementById("downloadBtn");

qrInput.addEventListener("input",()=>{
    let file = qrInput.value
    let sizeFinal = size.value
    let apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${file}&size=${sizeFinal}x${sizeFinal}`;
    qrPreview.src = apiUrl
})
downloadBtn.addEventListener("click",()=>{
    downloadBtn.download = "ArafatQrCode.png"
})
