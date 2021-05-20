import React from "react";
function Form() {
  function Search(event) {
    event.preventDefault();
    let results = document.getElementById("results");
    let query = document.getElementById("query").value.trim();
    let api = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch=${query}`;
    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        data.query.search.forEach((result) => {
          const url = `https://en.wikipedia.org/?curid=${result.pageid}`;
          results.insertAdjacentHTML(
            "beforeend",
            `<div class="card">
               <div class="card-body">
                <h5 class="card-title">
                  <a href="${url}" class="card-link">${result.title}</a>
                </h5>
                <a href="${url}" class=card-link" >${url}</a>
                <h6 class="card-subtitle text-muted mt-2">${result.snippet}</span>
                </h6>
              </div>
            </div>
            <br/>`
          );
        });
      });
  }
  function Clear(event) {
    event.preventDefault();
    document.getElementById("results").style.display = "none";
    document.getElementById("query").value = "";
  }
  return (
    <div className="container my-4">
      <form id="form" className="mb-4">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="query"
            aria-describedby="query"
            placeholder="Search"
          />
        </div>
        <button
          type="submit"
          className="btn btn-success mb-3 d-block"
          id="search"
          onClick={Search}
        >
          Search 🔎
        </button>
        <button className="btn btn-danger" id="clear" onClick={Clear}>
          Clear
        </button>
      </form>
      <div id="results"></div>
    </div>
  );
}

export default Form;
