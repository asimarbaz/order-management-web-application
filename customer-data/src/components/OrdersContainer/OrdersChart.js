import { PieChart, Pie, Tooltip } from 'recharts';

const OrdersChart = (props) => {
    const { orderNumbers } = props
    const data = [];
    orderNumbers.forEach((order, i) => {
        if(i !==4 ){
            data.push({name:`${i+1} orders`, customers:order})
        }
        else{
            data.push({name:`${i+1}+ orders`, customers:order})
        }
        
    })

    return (
        <div>
            <PieChart width={300} height={200}>
                <Pie
                    dataKey="customers"
                    isAnimationActive={false}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                <Tooltip />
            </PieChart>
        </div>
    );
}
 
export default OrdersChart;