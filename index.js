const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd08f87792amsh9239bf1e648df1ep1ed957jsn5874eff70f93',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};
var arr
var coins

const fetchData = async () =>{
    await fetch('https://coinranking1.p.rapidapi.com/coins', options)
	.then(response => response.json())
    .then(response => arr=response)
	.catch(err => console.error(err));
}
const run = async () =>{
    await fetchData()
    coins = arr?.data?.coins
    //console.log('f', coins, 'f') 
    for(let i=0;i<48;i++){
        // Create a div element with class "box1"
            var box1Div = document.createElement('div');
            box1Div.classList.add('box1');
    
            // Create a div element with class "content-z"
            var contentZDiv = document.createElement('div');
            contentZDiv.classList.add('content-z');
    
            // Create an anchor element with href attribute and add classes
            var anchorElement = document.createElement('a');
            anchorElement.href = 'https://cryptox-cryptotracker.netlify.app/crypto/Qwsogvtv82FCd';
    
            // Create a div element with class "card-title-z"
            var cardTitleZDiv = document.createElement('div');
            cardTitleZDiv.classList.add('card-title-z');
    
            // Create a div element with class "heading-z"
            var headingZDiv = document.createElement('div');
            headingZDiv.classList.add('heading-z');
            headingZDiv.textContent = coins[i]?.name;
    
            // Create a div element with class "coin-logo"
            var coinLogoDiv = document.createElement('div');
            coinLogoDiv.classList.add('coin-logo');
    
            // Create an img element with src attribute and style
            var imgElement = document.createElement('img');
            imgElement.src = coins[i]?.iconUrl;
            imgElement.alt = 'Image';
            imgElement.style.height = '53.2px';
            imgElement.style.marginRight = '10px';
            imgElement.style.width = '53.2px';
    
            // Append the img element to the "coin-logo" div
            coinLogoDiv.appendChild(imgElement);
    
            // Append the "heading-z" div and "coin-logo" div to the "card-title-z" div
            cardTitleZDiv.appendChild(headingZDiv);
            cardTitleZDiv.appendChild(coinLogoDiv);
    
            // Create a div element with class "card-lower-content"
            var cardLowerContentDiv = document.createElement('div');
            cardLowerContentDiv.classList.add('card-lower-content');
    
            // Create three div elements for "first-line" with respective content
            var firstLineDiv1 = document.createElement('div');
            firstLineDiv1.classList.add('first-line');
            firstLineDiv1.innerHTML = `<div class="price">Price: </div><div class="price-value">$ ${parseFloat(coins[i]?.marketCap).toFixed(2)} </div>`;
    
            var firstLineDiv2 = document.createElement('div');
            firstLineDiv2.classList.add('first-line');
            firstLineDiv2.innerHTML = `<div class="price">Market Cap: </div><div class="price-value">$ ${coins[i]?.marketCap} </div>`;
    
            var firstLineDiv3 = document.createElement('div');
            firstLineDiv3.classList.add('first-line');
            firstLineDiv3.innerHTML = `<div class="price">Daily Changes: </div><div class="price-value-third" style="font-size: 17px; margin-left: 10px;"> ${coins[i]?.change} %</div>`;

            var value = coins[i]?.change
            var priceChangeColor = firstLineDiv3.querySelector('.price-value-third')
            if (!isNaN(value)) {
                // Check if the value is positive or negative
                if ( value >= 0) {
                    priceChangeColor.style.color = "greenyellow";
                } else {
                    priceChangeColor.style.color = "#FF0000";
                }
            }
    
            // Append the three "first-line" divs to the "card-lower-content" div
            cardLowerContentDiv.appendChild(firstLineDiv1);
            cardLowerContentDiv.appendChild(firstLineDiv2);
            cardLowerContentDiv.appendChild(firstLineDiv3);
    
            // Append the "card-title-z" div and "card-lower-content" div to the "content-z" div
            contentZDiv.appendChild(cardTitleZDiv);
            contentZDiv.appendChild(cardLowerContentDiv);
    
            // Append the "content-z" div to the "box1" div
            box1Div.appendChild(contentZDiv);
    
            // Append the "box1" div to the body of the document
            var grid = document.querySelector('.bachahuapage')
            grid.appendChild(box1Div);
    }
}
run()

