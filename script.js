const accessKey = 'BhZupdB-o08_QAKr7HUUyu3Oz3guEwQAWL0P8ExvDow';

const formEl = document.querySelector('form');
const inputEl = document.getElementById('search-input');
const resultsEl = document.querySelector('.search-results');
const showMoreBtn = document.getElementById('show-more-button');

let input = '';
let page = 1;

async function searchImage(){
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${input}&client_id=${accessKey}`;
    // console.log(url);

    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    let results = data.results;

    // console.log(results);

    if(page === 1){
        resultsEl.innerHTML = '';
    }
    results.map(result => {
        const resultEl = document.createElement('div');
        resultEl.classList.add('search-result');
        const imageEl = document.createElement('img');
        imageEl.src=result.urls.small;
        imageEl.alt = result.alt_description;
        const textLink = document.createElement('a');
        textLink.href = result.links.html;
        textLink.target = '_blank';
        textLink.innerText = result.alt_description;

        resultEl.appendChild(imageEl);
        resultEl.appendChild(textLink);
        resultsEl.appendChild(resultEl);
    });
    page++;
    if(page > 1){
        showMoreBtn.style.display = 'block';
    }


}

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    page = 1;
    // console.log(page);
    input = inputEl.value;
    // console.log(input);
    searchImage();
});

showMoreBtn.addEventListener('click', () => {
    searchImage();
})



