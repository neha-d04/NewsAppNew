console.log("heyy");
// APIKey : c2a88163e5b229b80777f81685773547;
// http://api.mediastack.com/v1/news?access_key=c2a88163e5b229b80777f81685773547&country=in

// New API KEY  = 011b71f7febc45b28e802eac663a12b3;
// https://newsapi.org/v2/top-headlines?country=in&apiKey=011b71f7febc45b28e802eac663a12b3

let newsItem = document.getElementById("newsItem");

fetch(
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=011b71f7febc45b28e802eac663a12b3"
)
  .then((res) => res.json())
  .then((articles) => {
    console.log(articles);
    fetchNews(articles);
  })
  .catch((error) => console.log(error));

var fetchNews = (articles) => {
  let newsHTML = "";
  Object.keys(articles.articles).forEach((element) => {
    console.log(element);
    let news = `<div class="col-sm-4" id="newsItem" >
            <div >
                <div class="card" style="width: 25rem; height: 45rem" >
                    <img src="${articles.articles[element].urlToImage}" class="card-img-top" alt="Image failed to Load" onerror="this.src='https://static.yabiladi.com/files/articles/e3b76fef6b87cf909c63e4bd8c584e0320210803132514150.jpg';">
                    <div class="card-body">
                        <h5 class="card-title">${articles.articles[element].title}</h5>
                        <p class="card-text">${articles.articles[element].description}</p>
                        <p class="card-text">Published at: ${articles.articles[element].publishedAt}</p>
                        <p class="card-text">Author: ${articles.articles[element].author}</p>
                        <a href="${articles.articles[element].url}" target="_blank"class="btn btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        </div>`;

    newsHTML += news;
  });
  newsItem.innerHTML = newsHTML;
};
