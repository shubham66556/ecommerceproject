// const cart_items = document.querySelector('#cart .cart-items');


// const parentContainer = document.getElementById('EcommerceContainer');
// parentContainer.addEventListener('click',(e)=>{

//     if (e.target.className=='shop-item-button'){
//         const id = e.target.parentNode.parentNode.id
//         const name = document.querySelector(`#${id} h3`).innerText;
//         const img_src = document.querySelector(`#${id} img`).src;
//         const price = e.target.parentNode.firstElementChild.firstElementChild.innerText;
//         let total_cart_price = document.querySelector('#total-value').innerText;
//         if (document.querySelector(`#in-cart-${id}`)){
//             alert('This item is already added to the cart');
//             return
//         }
//         document.querySelector('.cart-number').innerText = parseInt(document.querySelector('.cart-number').innerText)+1
//         const cart_item = document.createElement('div');
//         cart_item.classList.add('cart-row');
//         cart_item.setAttribute('id',`in-cart-${id}`);
//         total_cart_price = parseFloat(total_cart_price) + parseFloat(price)
//         total_cart_price = total_cart_price.toFixed(2)
//         document.querySelector('#total-value').innerText = `${total_cart_price}`;
//         cart_item.innerHTML = `
//         <span class='cart-item cart-column'>
//         <img class='cart-img' src="${img_src}" alt="">
//             <span>${name}</span>
//     </span>
//     <span class='cart-price cart-column'>${price}</span>
//     <span class='cart-quantity cart-column'>
//         <input type="text" value="1">
//         <button>REMOVE</button>
//     </span>`
//         cart_items.appendChild(cart_item)

//         const container = document.getElementById('container');
//         const notification = document.createElement('div');
//         notification.classList.add('notification');
//         notification.innerHTML = `<h4>Your Product : <span>${name}</span> is added to the cart<h4>`;
//         container.appendChild(notification);
//         setTimeout(()=>{
//             notification.remove();
//         },2500)
//     }
//     if (e.target.className=='cart-btn-bottom' || e.target.className=='cart-bottom' || e.target.className=='cart-holder'){
//         document.querySelector('#cart').style = "display:block;"
//     }
//     if (e.target.className=='cancel'){
//         document.querySelector('#cart').style = "display:none;"
//     }
//     if (e.target.className=='purchase-btn'){
//         if (parseInt(document.querySelector('.cart-number').innerText) === 0){
//             alert('You have Nothing in Cart , Add some products to purchase !');
//             return
//         }
//         alert('Thanks for the purchase')
//         cart_items.innerHTML = ""
//         document.querySelector('.cart-number').innerText = 0
//         document.querySelector('#total-value').innerText = `0`;
//     }

//     if (e.target.innerText=='REMOVE'){
//         let total_cart_price = document.querySelector('#total-value').innerText;
//         total_cart_price = parseFloat(total_cart_price).toFixed(2) - parseFloat(document.querySelector(`#${e.target.parentNode.parentNode.id} .cart-price`).innerText).toFixed(2) ;
//         document.querySelector('.cart-number').innerText = parseInt(document.querySelector('.cart-number').innerText)-1
//         document.querySelector('#total-value').innerText = `${total_cart_price.toFixed(2)}`
//         e.target.parentNode.parentNode.remove()
//     }
// })

















// document.addEventListener('DOMContentLoaded',()=>{

//     //display products along with pagination
//     displayProducts();

    
    
//     const parentContainer = document.getElementById('EcommerceContainer');
//     parentContainer.addEventListener('click',(event)=>{

//     //adding to cart database
//         if(event.target.classList.contains("shop-item-button")){
//             const parentId=event.target.parentNode.parentNode.parentNode.id;
//             axios.post('http://localhost:7000/cart',{'productId':parentId.substring(1)})
//             .then((response)=>{
//                 if(response.status===200)
//                     notifyUser(response.data.message)
//                 else
//                     throw new Error(response.data.message)
//             })
//             .catch(err=>{
//                 console.log(err)
//                 notifyUser(err)
//             })


//         }


//     //displaying in cart
//     if (event.target.className=='cart-btn-bottom' || event.target.className=='cart-bottom' || event.target.className=='cart-holder'){

//         displayInCart();
//     }
//     if (event.target.className=='cancel'){
//         document.querySelector('#cart').style = "display:none;"
//         const cart_items = document.querySelector('#cart .cart-items');
//         cart_items.innerHTML='';
//     }
    

//     //removing from cart
//     if (event.target.innerText=='REMOVE'){
//         axios.post('http://localhost:7000/cart-delete-item',{'productId':event.target.parentNode.parentNode.id.substring(8)})
//         .then(response=>{
//         removeFromFrontendCart(event)
//         notifyUser(response.data.message)    
//         })
//         .catch(errmsg=>{
//         console.log(errmsg)
//         })

//     }



// }) //ecommerce container end
// })  //domContentLoaded end

// function displayProducts(queryParams=''){
//     axios.get(`http://localhost:7000/products/${queryParams}`)
//     .then(result=>{
//         const productsDisplayContainerDiv=document.getElementById('products-content')
//         productsDisplayContainerDiv.innerHTML='';
//         result.data.products.forEach(product=>{
//             const eachProduct=document.createElement('div');
//             eachProduct.setAttribute('id',`p${product.id}`)
//             eachProduct.innerHTML=`<h3>${product.title}</h3> 
//             <div> <img src="${product.imageUrl}" alt="Image not Found"> </div>  
//             <div> <p>${product.description}</p></div> 
//             <div> 
//                 <span>$</span> 
//                 <span>${product.price} </span> 
//                 <span> <button class="shop-item-button"> Add to Cart </button> </span> 
//             </div> 
//             <br>`
//             productsDisplayContainerDiv.appendChild(eachProduct)
//         })
        
//         pagination(result,document.getElementById('productPagination'),'products');
//     })
//     .catch(err=>{
//         console.log(err)
//     })

// }


// function displayInCart(queryParams=''){
//         axios.get(`http://localhost:7000/cart/${queryParams}`)
//         .then(response=>{
//             const cart_items = document.querySelector('#cart .cart-items');
//             cart_items.innerHTML='';
//             response.data.products.forEach((prod)=>{
//             const cart_item = document.createElement('div');
//             cart_item.classList.add('cart-row');
//             cart_item.setAttribute('id',`in-cart-${prod.id}`)
//             cart_item.innerHTML = `
//             <span class='cart-item cart-column'>
//             <img class='cart-img' src="${prod.imageUrl}" alt="">
//                 <span>${prod.title}</span>
//             </span>
//             <span class='cart-price cart-column'>${prod.price}</span>
//             <span class='cart-quantity cart-column'>
//             <input type="text" value="${prod.cartItem.quantity}">
//             <button>REMOVE</button>
//             </span>`
//             cart_items.appendChild(cart_item)

//             })
//             //for amount and no. of products in cart
//             let totalAmount=0;
//             let totalproducts=0;

//             response.data.allProducts.forEach((prod)=>{
//                 totalAmount+=(parseFloat(prod.price)*parseFloat(prod.cartItem.quantity))
//                 totalproducts++;
//             })

//             pagination(response,document.getElementById('cartPagination'),'cart');
//             document.querySelector('#cart').style = "display:block"
//             document.querySelector('#total-value').innerText=totalAmount.toFixed(2);
//             document.querySelector('.cart-number').innerText=totalproducts;


//         })
//         .catch(err=>{
//             console.log(err)
//         })
        
// }

// function notifyUser(message){
//     const container = document.getElementById('container');
//     const notification = document.createElement('div');
//     notification.classList.add('notification');
//     notification.innerHTML = `<h4>${message}</h4>`;
//     container.appendChild(notification);
//     setTimeout(()=>{
//         notification.remove();
//         },2500)
// }

// function removeFromFrontendCart(event){
//     let total_cart_price = document.querySelector('#total-value').innerText;
//     let item_price=document.querySelector(`#${event.target.parentNode.parentNode.id} .cart-price`).innerText;
//     let item_quantity=event.target.parentNode.firstElementChild.value;

//     total_cart_price = parseFloat(total_cart_price).toFixed(2) - (parseFloat(item_price).toFixed(2) * parseInt(item_quantity)) ;
//     document.querySelector('.cart-number').innerText = parseInt(document.querySelector('.cart-number').innerText)-1
//     document.querySelector('#total-value').innerText = `${total_cart_price.toFixed(2)}`
//     event.target.parentNode.parentNode.remove()
// }































// document.addEventListener('DOMContentLoaded',()=>{

//     //display products along with pagination
//     displayProducts();

    
    
//     const parentContainer = document.getElementById('EcommerceContainer');
//     parentContainer.addEventListener('click',(event)=>{

//     //adding to cart database
//         if(event.target.classList.contains("shop-item-button")){
//             const parentId=event.target.parentNode.parentNode.parentNode.id;
//             axios.post('http://localhost:7000/cart',{'productId':parentId.substring(1)})
//             .then((response)=>{
//                 if(response.status===200)
//                     notifyUser(response.data.message)
//                 else
//                     throw new Error(response.data.message)
//             })
//             .catch(err=>{
//                 console.log(err)
//                 notifyUser(err)
//             })


//         }


//     //displaying in cart
//     if (event.target.className=='cart-btn-bottom' || event.target.className=='cart-bottom' || event.target.className=='cart-holder'){

//         displayInCart();
//     }
//     if (event.target.className=='cancel'){
//         document.querySelector('#cart').style = "display:none;"
//         const cart_items = document.querySelector('#cart .cart-items');
//         cart_items.innerHTML='';
//     }
    

//     //removing from cart
//     if (event.target.innerText=='REMOVE'){
//         axios.post('http://localhost:7000/cart-delete-item',{'productId':event.target.parentNode.parentNode.id.substring(8)})
//         .then(response=>{
//         removeFromFrontendCart(event)
//         notifyUser(response.data.message)    
//         })
//         .catch(errmsg=>{
//         console.log(errmsg)
//         })

//     }


// }) //ecommerce container end
// })  //domContentLoaded end

// function displayProducts(queryParams=''){
//     axios.get(`http://localhost:7000/products/${queryParams}`)
//     .then(result=>{
//         const productsDisplayContainerDiv=document.getElementById('products-content')
//         productsDisplayContainerDiv.innerHTML='';
//         result.data.products.forEach(product=>{
//             const eachProduct=document.createElement('div');
//             eachProduct.setAttribute('id',`p${product.id}`)
//             eachProduct.innerHTML=`<h3>${product.title}</h3> 
//             <div> <img src="${product.imageUrl}" alt="Image not Found"> </div>  
//             <div> <p>${product.description}</p></div> 
//             <div> 
//                 <span>$</span> 
//                 <span>${product.price} </span> 
//                 <span> <button class="shop-item-button"> Add to Cart </button> </span> 
//             </div> 
//             <br>`
//             productsDisplayContainerDiv.appendChild(eachProduct)
//         })
        
//         pagination(result,document.getElementById('productPagination'),'products');
//     })
//     .catch(err=>{
//         console.log(err)
//     })

// }


// function displayInCart(queryParams=''){
//         axios.get(`http://localhost:7000/cart/${queryParams}`)
//         .then(response=>{
//             const cart_items = document.querySelector('#cart .cart-items');
//             cart_items.innerHTML='';
//             response.data.products.forEach((prod)=>{
//             const cart_item = document.createElement('div');
//             cart_item.classList.add('cart-row');
//             cart_item.setAttribute('id',`in-cart-${prod.id}`)
//             cart_item.innerHTML = `
//             <span class='cart-item cart-column'>
//             <img class='cart-img' src="${prod.imageUrl}" alt="">
//                 <span>${prod.title}</span>
//             </span>
//             <span class='cart-price cart-column'>${prod.price}</span>
//             <span class='cart-quantity cart-column'>
//             <input type="text" value="${prod.cartItem.quantity}">
//             <button>REMOVE</button>
//             </span>`
//             cart_items.appendChild(cart_item)

//             })
//             //for amount and no. of products in cart
//             let totalAmount=0;
//             let totalproducts=0;

//             response.data.allProducts.forEach((prod)=>{
//                 totalAmount+=(parseFloat(prod.price)*parseFloat(prod.cartItem.quantity))
//                 totalproducts++;
//             })

//             pagination(response,document.getElementById('cartPagination'),'cart');
//             document.querySelector('#cart').style = "display:block"
//             document.querySelector('#total-value').innerText=totalAmount.toFixed(2);
//             document.querySelector('.cart-number').innerText=totalproducts;


//         })
//         .catch(err=>{
//             console.log(err)
//         })
        
// }

// function notifyUser(message){
//     const container = document.getElementById('container');
//     const notification = document.createElement('div');
//     notification.classList.add('notification');
//     notification.innerHTML = `<h4>${message}</h4>`;
//     container.appendChild(notification);
//     setTimeout(()=>{
//         notification.remove();
//         },2500)
// }

// function removeFromFrontendCart(event){
//     let total_cart_price = document.querySelector('#total-value').innerText;
//     let item_price=document.querySelector(`#${event.target.parentNode.parentNode.id} .cart-price`).innerText;
//     let item_quantity=event.target.parentNode.firstElementChild.value;

//     total_cart_price = parseFloat(total_cart_price).toFixed(2) - (parseFloat(item_price).toFixed(2) * parseInt(item_quantity)) ;
//     document.querySelector('.cart-number').innerText = parseInt(document.querySelector('.cart-number').innerText)-1
//     document.querySelector('#total-value').innerText = `${total_cart_price.toFixed(2)}`
//     event.target.parentNode.parentNode.remove()
// }

// function pagination(response,container,place){
//     let func;
//     if(place=='cart')
//     func='displayInCart'
//     else if(place=='products')
//     func='displayProducts'

//     container.innerHTML=`
//     <span>
//         <button id="${place}firstPage" onclick="${func}('?page=1')">1</button>
//         <button id="${place}previousPage" onclick="${func}('?page=${response.data.previousPage}')">${response.data.previousPage}</button>
//         <button id="${place}currentPage" onclick="${func}('?page=${response.data.currentPage}')" class="active">${response.data.currentPage}</button>
//         <button id="${place}nextPage" onclick="${func}('?page=${response.data.nextPage}')">${response.data.nextPage}</button>
//         <button id="${place}lastPage" onclick="${func}('?page=${response.data.lastPage}')">${response.data.lastPage}</button>
//     </span>
//     `
//     const firstPage=document.getElementById(`${place}firstPage`);
//     const currentPage=document.getElementById(`${place}currentPage`);
//     const previousPage=document.getElementById(`${place}previousPage`);
//     const nextPage=document.getElementById(`${place}nextPage`);
//     const lastPage=document.getElementById(`${place}lastPage`);
//     if(parseInt(currentPage.innerText)==1)
//     firstPage.style='display:none'
//     if(parseInt(previousPage.innerText)<1 || parseInt(previousPage.innerText)==firstPage.innerText)
//     previousPage.style='display:none'
//     if(parseInt(nextPage.innerText)>parseInt(lastPage.innerText))
//     nextPage.style='display:none'
//     if(parseInt(currentPage.innerText)==parseInt(lastPage.innerText) || parseInt(nextPage.innerText)==parseInt(lastPage.innerText) )
//     lastPage.style='display:none'


// }











































document.addEventListener('DOMContentLoaded',()=>{

    //display products along with pagination
    displayProducts();

    
    
    const parentContainer = document.getElementById('EcommerceContainer');
    parentContainer.addEventListener('click',(event)=>{

    //adding to cart database
        if(event.target.classList.contains("shop-item-button")){
            const parentId=event.target.parentNode.parentNode.parentNode.id;
            axios.post('http://localhost:7000/cart',{'productId':parentId.substring(1)})
            .then((response)=>{
                if(response.status===200)
                    notifyUser(response.data.message)
                else
                    throw new Error(response.data.message)
            })
            .catch(err=>{
                console.log(err)
                notifyUser(err)
            })


        }


    //displaying in cart
    if (event.target.className=='cart-btn-bottom' || event.target.className=='cart-bottom' || event.target.className=='cart-holder'){

        displayInCart();
    }
    if (event.target.className=='cancel'){
        document.querySelector('#cart').style = "display:none;"
        const cart_items = document.querySelector('#cart .cart-items');
        cart_items.innerHTML='';
    }
    

    //removing from cart
    if (event.target.innerText=='REMOVE'){
        axios.post('http://localhost:7000/cart-delete-item',{'productId':event.target.parentNode.parentNode.id.substring(8)})
        .then(response=>{
        removeFromFrontendCart(event)
        notifyUser(response.data.message);  
        })
        .catch(errmsg=>{
        console.log(errmsg)
        })

    }

    if (event.target.className=='purchase-btn'){
        if (parseInt(document.querySelector('.cart-number').innerText) === 0){
            alert('You have Nothing in Cart , Add some products to purchase !');
        }
        else{
            axios.post('http://localhost:7000/order-place')
            .then((response)=>{
                notifyUser(response.data.message);
                const cart_items = document.querySelector('#cart .cart-items');
                cart_items.innerHTML = ""
                document.querySelector('.cart-number').innerText = '0'
                document.querySelector('#total-value').innerText = '0';
            })
        }

    }

}) //ecommerce container end
})  //domContentLoaded end

function displayProducts(queryParams=''){
    axios.get(`http://localhost:7000/products/${queryParams}`)
    .then(result=>{
        const productsDisplayContainerDiv=document.getElementById('products-content')
        productsDisplayContainerDiv.innerHTML='';
        result.data.products.forEach(product=>{
            const eachProduct=document.createElement('div');
            eachProduct.setAttribute('id',`p${product.id}`)
            eachProduct.innerHTML=`<h3>${product.title}</h3> 
            <div> <img src="${product.imageUrl}" alt="Image not Found"> </div>  
            <div> <p>${product.description}</p></div> 
            <div> 
                <span>$</span> 
                <span>${product.price} </span> 
                <span> <button class="shop-item-button"> Add to Cart </button> </span> 
            </div> 
            <br>`
            productsDisplayContainerDiv.appendChild(eachProduct)
        })
        
        pagination(result,document.getElementById('productPagination'),'products');
    })
    .catch(err=>{
        console.log(err)
    })

}


function displayInCart(queryParams=''){
        axios.get(`http://localhost:7000/cart/${queryParams}`)
        .then(response=>{
            const cart_items = document.querySelector('#cart .cart-items');
            cart_items.innerHTML='';
            response.data.products.forEach((prod)=>{
            const cart_item = document.createElement('div');
            cart_item.classList.add('cart-row');
            cart_item.setAttribute('id',`in-cart-${prod.id}`)
            cart_item.innerHTML = `
            <span class='cart-item cart-column'>
            <img class='cart-img' src="${prod.imageUrl}" alt="">
                <span>${prod.title}</span>
            </span>
            <span class='cart-price cart-column'>${prod.price}</span>
            <span class='cart-quantity cart-column'>
            <input type="text" value="${prod.cartItem.quantity}">
            <button>REMOVE</button>
            </span>`
            cart_items.appendChild(cart_item)

            })
            //for amount and no. of products in cart
            let totalAmount=0;
            let totalproducts=0;

            response.data.allProducts.forEach((prod)=>{
                totalAmount+=(parseFloat(prod.price)*parseFloat(prod.cartItem.quantity))
                totalproducts++;
            })

            pagination(response,document.getElementById('cartPagination'),'cart');
            document.querySelector('#cart').style = "display:block"
            document.querySelector('#total-value').innerText=totalAmount.toFixed(2);
            document.querySelector('.cart-number').innerText=totalproducts;


        })
        .catch(err=>{
            console.log(err)
        })
        
}

function notifyUser(message){
    const container = document.getElementById('container');
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerHTML = `<h4>${message}</h4>`;
    container.appendChild(notification);
    setTimeout(()=>{
        notification.remove();
        },2500)
}

function removeFromFrontendCart(event){
    let total_cart_price = document.querySelector('#total-value').innerText;
    let item_price=document.querySelector(`#${event.target.parentNode.parentNode.id} .cart-price`).innerText;
    let item_quantity=event.target.parentNode.firstElementChild.value;

    total_cart_price = parseFloat(total_cart_price).toFixed(2) - (parseFloat(item_price).toFixed(2) * parseInt(item_quantity)) ;
    document.querySelector('.cart-number').innerText = parseInt(document.querySelector('.cart-number').innerText)-1
    document.querySelector('#total-value').innerText = `${total_cart_price.toFixed(2)}`
    event.target.parentNode.parentNode.remove()
}

function pagination(response,container,place){
    let func;
    if(place=='cart')
    func='displayInCart'
    else if(place=='products')
    func='displayProducts'

    container.innerHTML=`
    <span>
        <button id="${place}firstPage" onclick="${func}('?page=1')">1</button>
        <button id="${place}previousPage" onclick="${func}('?page=${response.data.previousPage}')">${response.data.previousPage}</button>
        <button id="${place}currentPage" onclick="${func}('?page=${response.data.currentPage}')" class="active">${response.data.currentPage}</button>
        <button id="${place}nextPage" onclick="${func}('?page=${response.data.nextPage}')">${response.data.nextPage}</button>
        <button id="${place}lastPage" onclick="${func}('?page=${response.data.lastPage}')">${response.data.lastPage}</button>
    </span>
    `
    const firstPage=document.getElementById(`${place}firstPage`);
    const currentPage=document.getElementById(`${place}currentPage`);
    const previousPage=document.getElementById(`${place}previousPage`);
    const nextPage=document.getElementById(`${place}nextPage`);
    const lastPage=document.getElementById(`${place}lastPage`);
    if(parseInt(currentPage.innerText)==1)
    firstPage.style='display:none'
    if(parseInt(previousPage.innerText)<1 || parseInt(previousPage.innerText)==firstPage.innerText)
    previousPage.style='display:none'
    if(parseInt(nextPage.innerText)>parseInt(lastPage.innerText))
    nextPage.style='display:none'
    if(parseInt(currentPage.innerText)==parseInt(lastPage.innerText) || parseInt(nextPage.innerText)==parseInt(lastPage.innerText) )
    lastPage.style='display:none'


}

















