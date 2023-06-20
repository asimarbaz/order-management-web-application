import OrdersTable from "./OrdersTable";
import OrdersChart from "./OrdersChart"

const OrdersContainer = (props) => {
    const {customers2} = props;
    let orderNumbers = [0, 0, 0, 0, 0]

    customers2.forEach((customer) => {
        switch(customer.details.length){
            case 1:{
                orderNumbers[0]++
                break
            }
            case 2:{
                orderNumbers[1]++
                break
            }
            case 3:{
                orderNumbers[2]++
                break
            }
            case 4:{
                orderNumbers[3]++
                break
            }
            default:{
                orderNumbers[4]++
                break
            }          
        }
    })
    
    // console.log(orderNumbers)


    return (
        <div>
            <h3>Order distribution</h3>
            <div className="order-distribution">
                <OrdersTable orderNumbers={orderNumbers}/>
                <OrdersChart orderNumbers={orderNumbers}/>
            </div>
        </div>
    );
}
 
export default OrdersContainer;