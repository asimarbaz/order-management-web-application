import CustomerTable from "./CustomerTable";

const CustomerContainer = (props) => {
    const {  customers2 } = props
    return (
        <div>
            <CustomerTable customers2={customers2}/>
        </div>
    );
}
 
export default CustomerContainer;