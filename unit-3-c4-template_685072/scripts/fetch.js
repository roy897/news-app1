
async function search(url){
    try {
        let res = await fetch(url);
        let data = await res.json();
        // console.log(data);
        return data;
    } catch (err) {
        console.log(err);        
    }
    // return data;
}

function append(data,container){
    data.forEach(el => {

        let mDiv = document.createElement("div");
        mDiv.addEventListener("click",function(){
            localtorage(el)
        })
        
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src=el.urlToImage;
        let title = document.createElement("h3");
        title.innerText=el.title;
        let containt = document.createElement("p");
        containt.innerText=el.content;

        mDiv.append(image,title,containt);
        container.append(mDiv);
    });
}

function localtorage(el){
    localStorage.setItem("news",JSON.stringify(el));
    window.location.href="news.html"
}


export {search,append};



/*
{status: 'ok', totalResults: 23870, articles: Array(20)}
articles: Array(20)
0:
author: "Igor Bonifacic"
content: "Tesla delivered 310,048 vehicles over the first three months of 2022, the automaker announced\r\n on Saturday. This was an exceptionally difficult quarter due to supply chain interruptions and China Ze… [+920 chars]"
description: "Tesla delivered 310,048 vehicles over the first three months of 2022, the automaker announced\r\n on Saturday. “This was an exceptionally difficult quarter due to supply chain interruptions and China Zero-Covid policy,” Musk said\r\n on Twitter shortly after Tesl…"
publishedAt: "2022-04-02T21:41:41Z"
source: {id: 'engadget', name: 'Engadget'}
title: "Tesla's deliveries increased despite supply shortages and plant closures"
url: "https://www.engadget.com/tesla-q-1-2022-deliveries-214141313.html"
urlToImage: "https://s.yimg.com/os/creatr-uploaded-images/2022-03/733d9be0-b2cd-11ec-b7f9-382caaedc1ae"

*/





/*
{status: 'ok', totalResults: 38, articles: Array(20)}
articles: Array(20)
0:
author: "Aanchal Magazine"
content: "The Centre and the states are at loggerheads over taxes and duties on petrol and diesel. While the Centre feels the states are not reducing VAT in line with the Centre’s cut in excise duty, the state… [+6925 chars]"
description: "The Prime Minister has noted that certain states have not reduced VAT; states have attributed rising fuel prices to central taxes. How is fuel taxed, and how are collections shared between the Centre and states?"
publishedAt: "2022-04-29T06:02:45Z"
source: {id: null, name: 'The Indian Express'}
title: "Explained: States vs Centre on fuel taxes petrol diesel price hike - The Indian Express"
url: "https://indianexpress.com/article/explained/states-vs-centre-on-fuel-taxes-petrol-diesel-price-hike-7892286/"
urlToImage: "https://images.indianexpress.com/2022/04/fuel-price.jpeg"
*/


