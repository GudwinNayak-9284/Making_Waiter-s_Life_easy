let form=document.getElementById('getOrders')

form.addEventListener('submit',getOrderDetails)

function getOrderDetails(e){
    e.preventDefault()
    let price=document.getElementById('priceOfDish').value+'₹'
    let dish=document.getElementById('dishName').value
    let table=document.getElementById('tableNo').value
    let obj={
        Price:price,
        Dish:dish,
        Table:table
    }
    
    console.log(obj)
}