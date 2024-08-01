let bagItems;
onLoad();

function onLoad() {
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemsOnHomePage();
    displayBagIcon();
}

function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon() {
    let bagIconCountElement = document.querySelector(".bag-item-count");
    if(bagItems.length > 0){
        bagIconCountElement.style.visibility = "visible";
        bagIconCountElement.innerText = bagItems.length;
    } else {
        bagIconCountElement.style.visibility = "hidden";
    }
}


function displayItemsOnHomePage() {
    
    // let item = {
        //     item_image: 'images/1.jpg',
        //     rating: {
            //         stars: 4.5,
            //         noOfReviews: 1400,
            //     },
            //     comapany_name: 'Carlton London',
            //     item_name: 'Rhodium-plated CZ Floral',
            //     currPrice: 606,
            //     OrigPrice: 1045,
            //     discountPercentage: 42,
            // }
            
    let itemsContainerElement = document.querySelector(".items-container");
    if(!itemsContainerElement){
        return;
    }

    let innerHTML = ''
    items.forEach(item => {
        innerHTML += `
    <div class="item-container">
        <img class = "item-img" src = "${item.image}" alt="item image">
        <div class="rating">
            ${item.rating.stars} ⭐ | ${item.rating.count}
        </div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        <button class="btn-add-bag" onClick = "addToBag(${item.id})">Add to Bag</button>
    </div>`
    });

    itemsContainerElement.innerHTML = innerHTML;
}
