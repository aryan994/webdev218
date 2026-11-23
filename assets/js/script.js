console.log("Hello World")
let restaurantname = "Bitebox";
console.log("welcome to" +restaurantname);

//alert("welcome to "+restaurantname+ "!");

//let customername = prompt("welcome to "
    +restaurantname+ "!\n\nwhat is your name?"
//);


let age=25;
if(age>=18)
{
    console.log("Eligible");
}
else
{
    console.log("not eligible");
}

let marks=80;
if(marks>=75)
{
    console.log("Distinction")
}
else{
   console.log(" fail");
}


let day=3;
switch(day){

    case 1:
        console.log("monday");
        break;


    case 2:
        console.log("tuesday");
        break;


    case 3:
        console.log("wednesday");
        break;

default:
    console.log("invalaid day");
}
/*
for(let i=1; i <= 5; i++)
{
    console.log(i);
}

let i= 1;
while (i <= 5)
{
    console.log(i);
    i++;
}
do{
    console.log(i);
    i++
}while(i <= 5);
*/

/*
let i = 1;
let j = 20;
let sum = "+";
 switch(sum){
    case "+":
        console.log(sum = i+j);
        break;
    
    case "-":
        console.log(sum= i-j);
        break;
        
    case "*" :
        console.log(sum= i*j);
        break; 
     
     default:
        console.log("invaild")   
 }
        */

 /*for(let i=1; i<=10;i++){
    console.log(i)
    
 } */

/*let i=1;
while(i<=10)
    {
        if(i%2===0){
            console.log(i);
        }
       
        i++;
    }
        */


 /*   let i= 1;
    do{
        console.log(i);
        i++;
    }
    while(i<=5);
    */

/*
    let a=10;
    let b= 5;
    let operator = "sub";
    switch (operator)

    {
        case "sum":
            console.log(a+b);
            break;
        case "sub":
            console.log(a-b);
            break;
        case "mul":
            console.log(a*b);
            break;
        case "div":
            console.log(a/b);
            break;
        default:
            console.log("invalid");                
    }

*/
/*
let c = 1;
while(c<=10)
{
    if(c %2 !==0)
    {
        console.log(c)
    }
     c++;
} 
     */

/*
function greet()
{
    console.log("hello");
    console.log("fab course");
}
greet();



function add(a,b,c)
{
    console.log(a+b+c);
    
}
add(10,5,5);
*/

/*
function arthimetic(a,b)
{
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
}
arthimetic(20,5);
*/




//calculate item total

/*
function calculateItemTotal(price,quantity)
{
    return price*quantity;
}
//calculate subtotal

function calculateSubtotat()
{
    let subtotal=0;
    let rows=document.querySelectorAll('#shoppping-cart tbody tr');
    rows.forEach(function(row)
{
    let priceText=row.children[1].textContent;
    let price=parseFloat(priceText.replace("Rs."," ").trim());
    let quantity=parseInt(row.querySelector(".quantity-box span").textContent);
    let itemTotal=calculateItemTotal(price,quantity);
    row.querySelector(".item-total").textContent="Rs. "+itemTotal;
});
return subtotal;
}

//calculate delivery chRGE

function calculateDelivery(subtotal)
{
    if(subtotal >0)
    {
        return 40;
    }
    return 0;
}
function calculateTotal(subtotal,delivery)
{
    return subtotal+ delivery;
}
function updateBill()
{
    let subtotal=calculateSubtotat();
    let delivery=calculateDelivery(subtotal);
        let total = calculateTotal(subtotal, delivery);

    document.getElementById("subtotal-amount").textContent =
        "Rs. " + subtotal.toFixed(2);

    document.getElementById("delivery-amount").textContent =
        "Rs. " + delivery.toFixed(2);

    document.getElementById("total-amount").textContent =
        "Rs. " + total.toFixed(2);
}

// Call function
updateBill();
*/


/*
// Calculate item total
function calculateItemTotal(price, quantity) {
    return price * quantity;
}

// Calculate subtotal
function calculateSubtotal() {

    let subtotal = 0;

    let rows = document.querySelectorAll("#shopping-cart tbody tr");

    rows.forEach(function(row) {

        let priceText = row.children[1].textContent;

        let price = parseFloat(priceText.replace("Rs.", "").trim());

        let quantity = parseInt(
            row.querySelector(".quantity-box span").textContent
        );

        let itemTotal = calculateItemTotal(price, quantity);

        row.querySelector(".item-total").textContent = "Rs. " + itemTotal;

        subtotal = subtotal + itemTotal;

    });

    return subtotal;
}

// Calculate delivery charge
function calculateDelivery(subtotal) {

    if (subtotal > 0) {
        return 40;
    }

    return 0;
}

// Calculate final total
function calculateTotal(subtotal, delivery) {
    return subtotal + delivery;
}

// Update bill
function updateBill() {

    let subtotal = calculateSubtotal();

    let delivery = calculateDelivery(subtotal);

    let total = calculateTotal(subtotal, delivery);

    document.getElementById("subtotal-amount").textContent =
        "Rs. " + subtotal.toFixed(2);

    document.getElementById("delivery-amount").textContent =
        "Rs. " + delivery.toFixed(2);

    document.getElementById("total-amount").textContent =
        "Rs. " + total.toFixed(2);
}

// Call function
updateBill();
*/
// UPDATE 1: Get cart data from Local Storage

let cart = JSON.parse(localStorage.getItem("cart")) || [];


// UPDATE 2: Add food to cart

function addFood(name, price) {

    let food = cart.find(function(item) {
        return item.name === name;
    });

    if (food) {

        food.quantity++;

    } else {

        let newFood = {
            name: name,
            price: price,
            quantity: 1
        };

        cart.push(newFood);

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Food added to cart");

}


// UPDATE 3: Display cart items

function displayCart() {

    let output = "";
    let subtotal = 0;

    cart.forEach(function(food, index) {

        let itemTotal = food.price * food.quantity;

        subtotal = subtotal + itemTotal;

        output += `
            <tr>
                <td>${food.name}</td>

                <td>₹${food.price}</td>

                <td>
                    <button onclick="changeQuantity(${index}, -1)">-</button>

                    ${food.quantity}

                    <button onclick="changeQuantity(${index}, 1)">+</button>
                </td>

                <td>₹${itemTotal}</td>

                <td>
                    <button onclick="removeFood(${index})">
                        Remove
                    </button>
                </td>
            </tr>
        `;

    });


    // Display cart items

    let cartItems = document.getElementById("cart-items");

    if (cartItems) {
        cartItems.innerHTML = output;
    }


    // UPDATE 4: Calculate bill

    let delivery = subtotal > 0 ? 40 : 0;

    let total = subtotal + delivery;


    // Display item count

    let count = document.getElementById("item-count");

    if (count) {
        count.textContent = cart.length;
    }


    // Display subtotal

    let amount = document.getElementById("subtotal-amount");

    if (amount) {
        amount.textContent = "₹" + subtotal;
    }


    // Display delivery charges

    let deliveryAmount = document.getElementById("delivery-amount");

    if (deliveryAmount) {
        deliveryAmount.textContent = "₹" + delivery;
    }


    // Display final total

    let totalAmount = document.getElementById("total-amount");

    if (totalAmount) {
        totalAmount.textContent = "₹" + total;
    }

}


// UPDATE 5: Increase or decrease quantity

function changeQuantity(index, value) {

    cart[index].quantity = cart[index].quantity + value;

    if (cart[index].quantity === 0) {

        cart.splice(index, 1);

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}


// UPDATE 6: Remove food from cart

function removeFood(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}


// UPDATE 7: Clear complete cart

function clearCart() {

    cart = [];

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}


// UPDATE 8: Clear Cart button

let clearButton = document.getElementById("clear-cart");

if (clearButton) {

    clearButton.addEventListener("click", clearCart);

}


// UPDATE 9: Display saved cart when page loads

displayCart();


/*
function searchfood()

{
    let search=document.getElementById("search").value.toLowerCase();
    let product=document.querySelectorAll(".product");
    products.forEach(function(search)
    {
        let name=food.querySelector("h3").textContent.toLowerCase();
        if (name.includes(search))
        {
            food.style.display="block";
        }
        else{
            food.style.display="none";
        }
    });
}
*/
function searchFood()
{
    let search=document.getElementById("search").value.toLowerCase();
    let products=document.querySelectorAll(".product");
    products.forEach(function(food){
        let name=food.querySelector("h3").textContent.toLowerCase();
        if(name.includes(search)){
            food.style.display="block";
        }
        else
        {
            food.style.display="none";
        }
    });

}



