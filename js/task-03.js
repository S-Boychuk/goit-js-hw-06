const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// ===========================================================================================

const makeImagesList = obj => {
  return obj.reduce((acc, { url, alt }) =>
    (acc += `<li><img src="${url}",alt="${alt}" width=380, height=280></li>`), "")
};

const imagesList = makeImagesList(images);

const listEl = document.querySelector("ul");
listEl.insertAdjacentHTML("beforeend", imagesList);




//   const makeImagesList = obj =>
// //   obj.map(element => {
//     const liEl = document.createElement("li");
//     const imgEl = document.createElement("img");
//     imgEl.src = element.url;
//     imgEl.alt = element.alt;
//     imgEl.width = 480;
//     liEl.appendChild(imgEl);
    
//     return liEl;
//   });

// const imagesList = makeImagesList(images);  

// const listEl = document.querySelector("ul"); 
// listEl.append(...imagesList);

