window.onload = function () {
  let htmlCategories = categories
    .map(
      (item) => `
      <li>
        <a class="dropdown-item" href="category.html?id=${item.id}">
          ${item.name}
        </a>
      </li>`
    )
    .join("");
  document.getElementById("js-category").innerHTML = htmlCategories;
  document.getElementById("js-category-mobile").innerHTML = htmlCategories;
  let htmlLabels = categories
    .map(
      (item) => `
        <span class="label">
          <a href="category.html?id=${item.id}">${item.name}</a>
        </span>`
    )
    .join("");
  try {
    document.getElementById("js-label").innerHTML = htmlLabels;
  } catch (error) {}
  let htmlRecentPosts = movies
    .filter((item) => item.id < 4)
    .map(
      (item) => `
      <div class="col-12 mt-4 side-item">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12">
            <img class="img-fluid" src="${item.image}" alt="${item.name}">
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12">
            <a class="text-dark" href="movie.html?id=${item.id}">${item.name}</a>
          </div>
        </div>
      </div>`
    )
    .join("");
  try {
    document.getElementById("js-recent").innerHTML = htmlRecentPosts;
  } catch (error) {}
  if (window.location.pathname.includes("index.html")) {
    indexPage();
  }
  if (window.location.pathname.includes("search.html")) {
    try {
      const search = document.querySelector("#js-search-box");
      let timeout;
      search.addEventListener("keydown", function (event) {
        clearTimeout(timeout);
        timeout = setTimeout(render, 500);
      });
    } catch (error) {
      console.log("Lỗi: " + error.message);
    }
  }
  if (window.location.pathname.includes("movie.html")) {
    const params = new URLSearchParams(window.location.search);
    let id = params.get("id");
    if (!id) {
      history.pushState(null, null, "?id=0");
    }
    moviePage(id);
  }
  if (window.location.pathname.includes("category.html")) {
    const params = new URLSearchParams(window.location.search);
    let id = params.get("id");
    if (!id) {
      history.pushState(null, null, "?id=0");
    }
    categoryPage(id);
  }
  if (window.location.pathname.includes("actor.html")) {
    const params = new URLSearchParams(window.location.search);
    let id = params.get("id");
    if (!id) {
      history.pushState(null, null, "?id=0");
    }
    actorPage(id);
  }
};

function indexPage() {
  let htmlPosts = movies
    .map(
      (item) => `
        <div class="col-lg-6 col-md-6 col-sm-12 post-item">
          <div class="w-100">
            <img class="img-fluid" src="${item.image}" alt="${item.name}">
          </div>
          <h4 class="post-item-title"><a href="movie.html?id=${item.id}">${
        item.name
      }</a></h4>
          <p class="text-justify mb-4">
            ${item.short_description.concat("...")}
          </p>
        </div>`
    )
    .join("");
  document.getElementById("js-post-list").innerHTML = htmlPosts;
  let htmlSliders = movies
    .map(
      (item) => `
        <div class="slideshow js-mySlides fade">
          <div class="slider position-relative h-100">
            <img class="img-fluid" src="${item.image}" alt="${item.name}">
            <div class="slider-content d-none d-lg-block d-xl-block d-xxl-block d-md-block">
              <div class="category-name">
                <a href="category.html?id=${item.categories[0].id}">${item.categories[0].name}</a>
              </div>
              <div class="title-slider">
                <h4>
                  <a href="movie.html?id=${item.id}">${item.name}</a>
                </h4>
              </div>
              <p class="time-info">
                ${item.premiereDate}
              </p>
              <div class="read-more-btn">
                <a href="movie.html?id=${item.id}">Đọc thêm</a>
              </div>
            </div>
          </div>
        </div>`
    )
    .join("");
  document.getElementById("sliders").innerHTML = htmlSliders;
  showSlides();
  let movie = movies[2];
  let htmlMainPost = `
      <div class="mb-2">
          <img class="img-fluid" src="${movie.image}" alt="${movie.name}">
      </div>
      <p class="mt-4 mb-3 category-name-post"><a href="category.html?id=${
        movie.categories[0].id
      }">${movie.categories[0].name}</a></p>
      <h4 class="post-title"><a href="movie.html?id=${movie.id}">${
    movie.name
  }</a></h4>
      <p class="text-justify mt-3 mb-3 post-content">${movie.short_description.concat(
        "..."
      )}</p>
      <div class="more-link mb-5"><a href="movie.html?id=${
        movie.id
      }">Tiếp tục đọc</a></div>
      <div class="row post-meta">
          <span class="col-6 text-start">04, Tháng 4, 2022</span>
          <span class="col-6 text-end">0 bình luận</span>
      </div>`;
  document.getElementById("js-main-post").innerHTML = htmlMainPost;
}

function categoryPage(id) {
  let cate = categories.filter((c) => c.id == id)[0];
  document.getElementById("js-cate-name").innerHTML = cate.name;
  let movieCates = movies.filter((m) => m.categories.indexOf(cate) !== -1);
  let htmlCate = movieCates
    .map(
      (item) => `
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 post-item">
          <div class="w-100">
            <img class="img-fluid" src="${item.image}" alt="${item.name}">
          </div>
          <h4 class="post-item-title"><a href="movie.html?id=${item.id}">${
        item.name
      }</a></h4> 
          <p class="text-justify">
            ${item.short_description.concat("...")}
          </p>
        </div>`
    )
    .join("");
  document.getElementById("js-post-list-cate").innerHTML = htmlCate;
}

function moviePage(id) {
  let movie = movies.filter((m) => m.id == id)[0];
  let categories_movie = movie.categories
    .map((c) => `<a href="category.html?id=${c.id}">${c.name}</a>`)
    .join(" | ");
  let actors_movie = movie.actors
    .map(
      (actor, index) => `
        <p class="mt-1 mb-1">
          - <a href="actor.html?id=${actor.id}">${actor.stage_name}</a>
          : ${movie.actorDescriptions[index]}
        </p>`
    )
    .join("");
  let htmlMainMovie = `
        <div class="sub-post-header text-center">
          <div class="sub-post-label fs-3">
            <a href="category.html?id=${movie.categories[0].id}">
            ${movie.categories[0].name}
            </a>
          </div>
          <div class="pt-0 pb-2">
              <h2>${movie.name}</h2>
          </div>
          <div class="sub-meta-date text-capitalize">
            by <a href="#" title="author">Không ai</a>
            - Dec 04 2021
          </div>
        </div>
        <div class="text-justify mt-4">
          <img class="img-fluid" src="${movie.image}" alt="${movie.name}">
          <p class="mt-3"><span class="fw-bold">Ngày phát hành (Ngày ra mắt): </span>
            ${movie.premiereDate}
          </p>
          <p class="mt-3"><span class="fw-bold">Đạo diễn: </span>
            <a href="actor.html?id=${movie.director.id}">
              ${movie.director.fake_name}
            </a>
          </p>
          <p class="mt-3"><span class="fw-bold">Số tập phát sóng: </span>${
            movie.episodes
          }</p>
          <p class="mt-3"><span class="fw-bold">Độ dài: </span>${
            movie.duration
          }</p>
          <p class="mt-3">
            <p class="fw-bold mt-1 mb-1">Các thể loại: </p>
            ${categories_movie}
          </p>
          <p class="mt-3">
            <p class="fw-bold mt-1 mb-1">Các diễn viên tham gia: </p>
            ${actors_movie}
          </p>
          <p class="mt-3">
            <p class="fw-bold mb-2">Nội dung chính</p>
            ${movie.mainContent}
          </p>
          <p class="mt-3">
            <p class="fw-bold mb-2">Đánh giá, nhận xét</p>
            ${movie.review}
          </p>
        </div>
        <div class="line"></div>
        <div class="container-fluid mt-4 mb-1 pt-1 pb-1 pe-0 ps-0 sub-post-meta">
          <div class="row">
            <div class="col-6">
              <p class="text-uppercase">
                <i class="ti-tag"></i>
                Tags: ${movie.categories.map((item) => item.name).join(", ")}
              </p>
            </div>
            <div class="col-6 text-end sub-post-share">
              <a href="https://www.facebook.com/">
                <i class="ti-facebook icons"></i>
              </a>
              <a href="http://google.com/">
                <i class="ti-google icons"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i class="ti-instagram icons"></i>
              </a>
            </div>
          </div>
        </div>`;
  document.getElementById("js-main-movie").innerHTML = htmlMainMovie;
  const nextIndex =
    (((parseInt(id) + 1) % movies.length) + movies.length) % movies.length;
  let htmlNextMovie = `
      <div class="float-end">
        <a href="movie.html?id=${nextIndex}">Next Post<i class="ti-arrow-right"></i></a>
      </div>`;
  document.getElementById("js-next-movie").innerHTML = htmlNextMovie;
  const filteredMovies = movies.filter((item) => item.id != id);
  const shuffledMovies = filteredMovies.sort(() => Math.random() - 0.5);
  let htmlAlsoLike = shuffledMovies
    .slice(0, 3)
    .map(
      (item) => `
        <div class="col">
          <img class="img-fluid" src="${item.image}" alt="${item.name}">
          <a class="mb-4 text-dark" href="movie.html?id=${item.id}">${item.name}</a>
        </div>`
    )
    .join("");
  document.getElementById("js-also-like").innerHTML = htmlAlsoLike;
}

function actorPage(id) {
  let actor = actors.filter((c) => c.id == id)[0];
  let htmlMain = `
    <div class="actor-name mb-4 text-center">
      <h2 class="fs-2">${actor.stage_name}</h2>
    </div>
    <p class="text-start fst-italic">${actor.short_description}</p>
    <h5 class="mt-3 mb-1">Tiểu sử và sự nghiệp</h5>
    <p class="mt-0">
      ${actor.biography}
    </p>`;
  document.getElementById("js-actor").innerHTML = htmlMain;
  let date_of_death = "";
  if (actor.date_of_death != null)
    date_of_death = `<p class="mb-2"><span class="fw-medium mb-0">Mất: </span>${actor.date_of_death}</p>`;
  let htmlInfo = `
    <h4 class="widget-title"><span>${actor.stage_name}</span></h4>
    <div class="mt-2">
        <img class="img-thumbnail mb-4" src="${actor.image}" alt="${actor.name}">
        <p class="mb-2"><span class="fw-medium">Tên thật: </span>${actor.name}</p>
        <p class="mb-2"><span class="fw-medium mb-0">Sinh: </span>${actor.birthday}</p>
        ${date_of_death}
        <p class="mb-2"><span class="fw-medium mb-0">Nghề nghiệp: </span>${actor.job}</p>
        <p class="mb-2"><span class="fw-medium mb-0">Giải thưởng: </span>${actor.prize}</p>
        <p class="mb-2"><span class="fw-medium mb-0">Các phim tham gia: </span>${actor.featured_movie}</p>
    </div>`;
  document.getElementById("js-info-actor").innerHTML = htmlInfo;
}
let slideIndex = 0;
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slideshow");
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("d-block");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].classList.add("d-block");
  setTimeout(showSlides, 4000); // Thời gian hiển thị slide (4 giây)
}
