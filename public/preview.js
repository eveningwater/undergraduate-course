
const preview = (imgList) => {
    const viewer = new ewViewer({ img: [...imgList] })
    imgList.forEach((item, index) => {
        item.onclick = function () {
            viewer.viewImage(index)
        }
    })
}
window.onload = () => {
    const imgList = document.querySelectorAll('#VPContent img');
    if(imgList.length){
        preview(imgList);
    }
}