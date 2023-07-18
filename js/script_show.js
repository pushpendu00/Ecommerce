// console.log("show page");


async function deleteItems(event){
    let i = await confirm("are you want to delete ");
    console.log("hello");
    // console.log(i);
    if(i==false)
    {
        return;
    }
    // alert("hello");
    var deleteId = event.target.parentNode.id;
    // console.log(deleteId);
    var url = `/products/delete/${deleteId}`;
    await fetch(url,{
        method : 'DELETE'
    });
    window.location.href = '/products';
}

// .../models/productSchema


async function updateItems(event){
    var Id = event.target.parentNode.id;
    // var result = await ndb.findById(id);
    // console.log(document.getElementById(`${Id}`).childNodes);

    var quantity= prompt(`Enter updated quantity of : `);
    if(quantity>=0){
        var url = `/products/update-quantity/${Id}/${quantity}/`;
        let r = await fetch(url,{method : 'put'});
        window.location.href = "/products";
    }
    else{
        alert("Please enter quantity of this products......");
        return;
    }
    // console.log(age);
}