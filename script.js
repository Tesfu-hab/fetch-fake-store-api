// fetch() method: It is defined on the window object, which we can use to perform request.
// This method will return promise . . 
// Promise with either be fullfilled or rejected

fetch('https://fakestoreapi.com/products')
.then(response => {
    //console.log(response);
    return response.json();
})
.then(completeData => {
    // console.log(completeData)
    let data1 = "";
    completeData.map(values => {
        data1 += `<div class="card">
        <h1 class="title">${values.title}</h1>
        <img src="${values.image}" alt="img" class="images">
        <p>${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>
    </div>`
    });
    document.getElementById("cards").innerHTML = data1
})
.catch(error => {
    console.log('Error:', error);
})