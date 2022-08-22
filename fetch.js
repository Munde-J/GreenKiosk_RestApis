fetch('http://localhost:5000/products')
.then(function (response) {
    return response.json();
})
.then(function (info){
    console.log(info);
    let product = document.getElementById('products');
    info.forEach(i=>{
        let productList = document.createElement('li')
        productList.innerText = `${i.name}`
        product.appendChild(productList)
    });
})
.catch(function(error){
    console.log('error',error);
})

fetch('http://localhost:5000/products/fruits')
.then(function(response){
    return response.json();
})
.then(function(info){
    console.log(info);
    let products = document.getElementById('fruList');
    info.forEach(x=>{
        let productList = document.createElement('li')
        productList.innerText = `${x.name}`
        products.appendChild(productList)
    })

})
.catch(function(error){
    console.log('error',error)
});

fetch('http://localhost:5000/products/vegetables')
.then(function(response){
    return response.json();
})
.then(function(info){
    console.log(info);
    let products = document.getElementById('vegList');
    info.forEach(y=>{
        let productList = document.createElement('li')
        productList.innerText = `${y.name}`
        products.appendChild(productList)
    })

})
.catch(function(error){
    console.log('error',error)
});




    