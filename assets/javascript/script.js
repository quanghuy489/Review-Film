function render() {
  let data = document.getElementById("js-search-box").value;
  let html = "";
  for (const item of movies) {
    let temp = "";
    if (item.name.toLowerCase().indexOf(data.toLowerCase()) != -1) {
      temp = `
            <div class="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                <div class="search-item p-2 m-4 w-100">
                    <img class="img-fluid" src="${item.image}" alt="${item.name}">
                    <a class="text-dark" href="movie.html?id=${item.id}"><h4>${item.name}</h4></a>
                </div>
            </div>`;
    }
    html = html.concat(temp, "");
  }
  if (data == "") {
    html = movies
      .map(
        (item) => `
        <div class="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
            <div class="search-item p-2 m-4 w-100">
                <img class="img-fluid" src="${item.image}" alt="${item.name}">
                <a class="text-dark" href="movie.html?id=${item.id}"><h4>${item.name}</h4></a>
            </div>
        </div>`
      )
      .join("");
  }
  document.querySelector("#js-search-list").innerHTML = html;
}
