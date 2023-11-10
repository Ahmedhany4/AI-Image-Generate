// const api = "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";
// const inp = document.getElementById("inp");
// const btn = document.getElementById("btn");
// const images = document.getElementsByClassName("images");

// const getImage=async ()=> {
//   // let url = `https://api.unsplash.com/photos/random?client_id=${api}`;

// const methods = {
//   method:"POST" ,
//   headers:{
//     'Content-Type':'application/json',
//     'Authorization':`Bearer ${api}`,
//   },
//   body:JSON.stringify(
//     {
//       "prompt" :inp.value,
//       "n" : 3 ,
//       "size" : "256x256"

//     })
// };
//   const res = await fetch("https://api.openai.com/v1/images/generations",methods);

//   const data = await res.json(); 
//   const lsitImages = data.data ;
//   images.innerHTML = "";
//   lsitImages.map((photo)=>{
//     const container = document.createElement("div");
//     images.append(container);
//     const img = Document.createElement("img");
//     container.append(img);
//     img.src = photo.url;
//   });
// }


// btn.addEventListener("click",function(){
//   getImage();
// });


const api = "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";
const inp = document.getElementById("inp");
const btn = document.getElementById("btn");
const images = document.getElementById("images"); // Assuming "images" is the ID of the container for images

const getImage = async () => {
  const methods = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${api}`,
    },
    body: JSON.stringify(
      {
        "prompt": inp.value,
        "n": 3,
        "size": "256x256"
      })
  };

  try {
    const res = await fetch("https://api.openai.com/v1/images/generations", methods);
    const data = await res.json();

    const listImages = data.data;
    images.innerHTML = "";

    listImages.map((photo) => {
      const container = document.createElement("div");
      images.append(container);

      const img = document.createElement("img"); // Fix typo here, should be "document"
      container.append(img);

      img.src = photo.url;
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

btn.addEventListener("click", function () {
  getImage();
});
