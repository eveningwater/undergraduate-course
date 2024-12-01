const isValidImage = (src) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
  });
};
const preview = (imgList) => {
  const viewer = new ewViewer({ img: imgList });
  imgList.forEach((item, index) => {
    item.onclick = function () {
      viewer.viewImage(index);
    };
  });
};
window.onload = () => {
  const imgList = document.querySelectorAll("#VPContent img");
  Promise.allSettled(
    [...imgList].map(item => isValidImage(item?.getAttribute("src")))
  ).then((res) => {
    const isLoadSuccess =
      res.filter((item) => item.status === "fulfilled").length ===
      imgList.length;
    if (isLoadSuccess) {
      preview([...imgList]);
    }
  });
};
