
fetch("https://www.reddit.com/r/USNEWS.json")
.then(function (response) {
  return response.json();
})
.then(function (response) {
  let listItems = $(".news-list li");
  let e = response.data.children;
  let a = 0;

  //Populate top stories
  for (let i = 2; a < 4; i++) {
    if (
      e[i].data.thumbnail !== "self" &&
      e[i].data.thumbnail !== "default"
    ) {
      $(".news-list").append(
        `
                      <li>
                          <a href="${e[i].data.url}">
                          <img src="${e[i].data.thumbnail}">
                          <p>${
                            e[i].data.title.substring(0, 45) + "..."
                          }</p>
                          </a>

                      </li>
                      `
      );
      a++;
    }
  }
});