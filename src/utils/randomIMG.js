import BGimg1 from "@site/static/img/BGimg_01.jpg";
import BGimg2 from "@site/static/img/BGimg_02.jpg";
import BGimg3 from "@site/static/img/BGimg_03.jpg";
import BGimg4 from "@site/static/img/BGimg_04.jpg";
import BGimg5 from "@site/static/img/BGimg_05.jpg";

const imgArr = [BGimg1, BGimg2, BGimg3, BGimg4, BGimg5];

export const rando = imgArr[Math.floor(Math.random() * imgArr.length)];
