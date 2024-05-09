function buy(product_name){
    json = localStorage.getItem('prod1')
    json = JSON.parse(json)
    if(!json){
        json = {}
    }
    product = $('.'+product_name);
    proname = product[1].innerText
    if(json[product_name]){
        json[product_name]['count'] += 1
    }
    else{
        if(product[2].innerText[0] == 'F'){
            price = product[2].innerText.slice(6,-1)
        }
        else{
            price = product[2].innerText.slice(0,-1)
        }
        json[product_name] = {'image': product[0].src, 'name':proname, 'price':price, 'count':1}
    }
    localStorage.setItem('prod1', JSON.stringify(json))
    alert("Added to Cart")
}