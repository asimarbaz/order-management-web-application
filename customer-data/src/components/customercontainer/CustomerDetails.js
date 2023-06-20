const CustomerDetails = (props) => {
    const { selectedId,filteredCustomers } = props
    const customerData = filteredCustomers.find((customer) => {
        return customer.Id === selectedId
    })

    const totalAmount = customerData.details.reduce((pv, cv) => {
        return pv + cv.Amount
    }, 0)

    return (
        <div>
            <h4>Name: { customerData.Name }</h4>
            <h4>Mobile: { customerData.Phone }</h4>
            <h4>Number of Orders: {customerData.details.length}</h4>
            <h4>Order details:</h4>
            <table id="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {customerData.details.map((customer, i) => {
                        return (
                            <tr key={i}>
                                <td>{ customer.Date.substr(0,10) }</td>
                                <td>{customer.Amount }</td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot style={{backgroundColor:"#84525281"}}>
                    <tr className="total-amount">
                        <td>Total Amount:</td>
                        <td>{ totalAmount }</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}
 
export default CustomerDetails;