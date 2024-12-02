//get total
//create product
//Save localstorage
//clear inputs
//Read
//count
//update
//delete 
//Search
//clean data

//1-GET TOTAL

let title = document.getElementById('firstone');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');


function gettotal(){
    if(price.value != ''){
       let result = (+price.value + +taxes.value + +ads.value) - +discount.value
       total.innerHTML = result;
       total.style.background = 'green';
       
    }else{
        total.innerHTML = '';
        total.style.background = 'red';
    }
}


//2-CREATE PRODUCT 

let dataPro;
if(localStorage.product != null){
    dataPro = JSON.parse(localStorage.product)
}else{
    let dataPro = [];
}


submit.onclick = function(){
    let newPro = {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
    }
    dataPro.push(newPro);
    // Save localstorage
    localStorage.setItem('product',  JSON.stringify(dataPro))
    cleardata()
    showdata()
}


//3-clear inputs

function cleardata(){
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
}


//4-Read

console.log("hello world")

function showdata(){

    let tableau;
    for(let i=0 ; i<dataPro.length ; i++){
        tableau +=`
        <tr>
                    <td>${i}</td>
                    <td>${dataPro[i].title}</td>
                    <td>${dataPro[i].price}</td>
                    <td>${dataPro[i].taxes}</td>
                    <td>${dataPro[i].ads}</td>
                    <td>${dataPro[i].discount}</td>
                    <td>${dataPro[i].total}</td>
                    <td>${dataPro[i].count}</td>
                    <td>${dataPro[i].category}</td>
                    <td><button id="update">update</button></td>
                    <td><button onclick="deletedata(${i}) id="delete">delete</button></td>
                </tr>`
    }   document.getElementById('tbody').innerHTML = tableau;

} showdata()


//5-delete 

function deletedata(i){
       
}

