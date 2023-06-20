

const OrdersTable = (props) => {
    const { orderNumbers } = props

    return (
        <div>
            <table id="table">
                <thead>
                    <tr>
                        <th>Number of Orders</th>
                        <th>Count of customers</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderNumbers.map((order, i) => {
                            return (
                                <tr>    
                                    { i === 4 ? <td>{ i + 1 } + </td>: <td>{ i+1 }</td>}
                                    <td>{ order }</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
 
export default OrdersTable;