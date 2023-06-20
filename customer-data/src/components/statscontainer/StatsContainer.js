

const StatsContainer = (props) => {
    const {customers} = props
    const totalAmount = customers.reduce((pv, cv) => {
        return pv + cv.Amount
    }, 0)
    const uniqueIds = []
    const unique = customers.filter(customer => {
        const isDuplicate = uniqueIds.includes(customer.Name);
      
        if (!isDuplicate) {
          uniqueIds.push(customer.Name);
          return true;
        }
        return false;
      });

    return (
        <div className="Statscontainer"> 
            <h4>{customers.length} <br/>Orders</h4>
            <h4>{totalAmount}<br/>Amount</h4>
            <h4>{ uniqueIds.length }<br/>Users</h4>
        </div>
    );
}
 
export default StatsContainer;