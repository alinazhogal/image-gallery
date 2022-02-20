const input = document.getElementById("input");
const section = document.querySelector("section .container");

input.addEventListener('keydown', (event)=> {
  if (event.key === 'Enter')
  getImages()
})

async function getImages() {
  removeImages();

  const url = `https://api.unsplash.com/search/photos?query=${input.value}&per_page=21&orientation=landscape&client_id=2HzxQY_bB-qJY9T-cO40am_Hna-k5vorpjX-fr1-t0s`;

  const res = await fetch(url);
  const data = await res.json();
  const imageNodes = [];
  for (let i = 0; i < data.results.length; i++) {
    imageNodes[i] = document.createElement('img');
    imageNodes[i].src = data.results[i].urls.raw;
    section.append(imageNodes[i])
  }
}

function removeImages() {
  section.innerHTML = "";
}
