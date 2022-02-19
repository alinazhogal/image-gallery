const input = document.getElementById("input");
const section = document.querySelector("section .container");

input.addEventListener('keydown', (event)=> {
  if (event.key === 'Enter')
  getImages()
})

async function getImages() {
  removeImages();

  const url = `https://api.unsplash.com/search/photos?query=${input.value}&per_page=20&orientation=landscape&client_id=2HzxQY_bB-qJY9T-cO40am_Hna-k5vorpjX-fr1-t0s`;

  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
}

function removeImages() {
  section.innerHTML = "";
}
