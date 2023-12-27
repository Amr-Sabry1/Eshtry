$(document).ready(function() {
    $(".spinner").fadeOut(3000, function() {
        $(".spiner").fadeOut(500);
        $("body").css("overflow", "auto");
    });
});

get()
async function get() {
    let products = await fetch(`https://product-system.vercel.app/api/product`);
    if (products.status != 400) {
        products = await products.json()

        displayProduct(products);


    }
}

displayProduct(products);

function displayProduct(products) {
    var cartona = "";

    for (var i = 0; i < products.length; i++) {

        cartona += ` 
                             <div class="col-md-3 col-6">
                <div class="item">
                    <img src="https://raw.githubusercontent.com/Amr-Sabry1/MyPortfolio/main/img/${products[i].id}.jpg"
                        alt="">
                    <div class="p-md-3 pt-0  d-flex text-end flex-column">
                        <h5>${products[i].name}</h5>
                        <p class="text-muted p-0 mb-md-3">${products[i].desc}</p>
                        <h5>${products[i].price} ج.م</h5>
                    </div>
                </div>

            </div> `;
    }
    document.getElementById("tableData").innerHTML = cartona;
}