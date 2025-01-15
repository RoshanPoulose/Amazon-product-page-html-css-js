
const productContainers =document.querySelectorAll('.product-containers');
const nxtBtn = document.querySelectorAll('.nxt-btn');
const preBtn = document.querySelectorAll('.pre-btn');

productContainers.forEach((item, i) => {
     
    let containerWidth = item.offsetWidth;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

//filter products
const filtercheck = document.querySelectorAll('.filter_button .checkbox');

const products = document.querySelectorAll('.product-container .product-card');
const product2 = document.querySelectorAll('.product-containers .product-cards');
const product3 = document.querySelectorAll('.itemproduct .itemimageproduct');

const filterCards = (e) => {
    const filterValue = e.target.getAttribute('filter_data');
    const producters = [...products,...product2,...product3];
    producters.forEach(item => {
        if (item.getAttribute('filter_data') === filterValue) {
            item.classList.remove("hide");
        } else {
            item.classList.add("hide");
        }
    });
   
    

};
filtercheck.forEach(checkbox => checkbox.addEventListener("click", filterCards));

function showQuickPopup(heads,name, stars, newPrice, oldPrice, imgSrc) {
    const popup = document.getElementById('quick-popup');
    document.getElementById('popup-heads').textContent= heads;
    document.getElementById('popup-name').textContent = name;
    document.getElementById('popup-rating').textContent = stars;
    document.getElementById('popup-new-price').textContent = newPrice;
    document.getElementById('popup-old-price').textContent = oldPrice;
    document.getElementById('popup-image').src = imgSrc;
    
    popup.style.display = 'flex';
}

function closeQuickPopup() {
    const popup = document.getElementById('quick-popup');
    popup.style.display = 'none'; 
}
/// testing serach
const searchInput = document.getElementById("search");
const rows = document.querySelectorAll('.product-card');

searchInput.addEventListener('keyup', function (event) {
    const q = event.target.value.toLowerCase();

    rows.forEach((row) => {
        const productName = row.querySelector(".product-name").textContent.toLowerCase();
        
        
        row.style.display = "block";

        if (!productName.startsWith(q)) {
            row.style.display = "none";
        }
    });
});
