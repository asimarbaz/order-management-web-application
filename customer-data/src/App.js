import './App.css';
import { useEffect, useState } from 'react';
import StatsContainer from './components/statscontainer/StatsContainer';
import CustomerContainer from './components/customercontainer/customerContainer';
import OrdersContainer from './components/OrdersContainer/OrdersContainer';
import { startUserLogout } from './reduxstore/action/User'
import { Button, Modal } from 'antd';
import AddDetails from './components/customercontainer/addDetails';
import Login from './components/login';
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { startListCustomer } from './reduxstore/action/CustomerData'


function App() {
    //const [customers, setCustomers ] = useState()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch()

    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn)
    }

    useEffect(() => {
        if(localStorage.getItem('token')){
            handleLogin()
        }
        dispatch(startListCustomer())
    },[])

    const customers = useSelector((state) => {
        return state.Customer
    })


    customers?.forEach((customer, i) => {
        return {...customer,...customer.Id=i+1}
    })

    const names = customers?.map((customer) => {
        return {Name:customer.Name, Phone:customer.Phone}
    })
    let uniqueNames = []
    let uniqueObject = {}

    for(let i in names){
        let objName = names[i]['Name'];
        uniqueObject[objName] = names[i];
    }

    //console.log(uniqueObject)

    for(let i in uniqueObject){
        uniqueNames.push(uniqueObject[i])
    }

    let customers2 = []
    uniqueNames.forEach((uniqueName) => {
        let details=[]
        customers.forEach((customer) => {
            var obj = {}
            if(uniqueName.Name === customer.Name){
                obj['Amount']=customer.Amount
                obj['Date'] = customer.Date
                details.push(obj)
            }
        })
        customers2.push({Name:uniqueName.Name,Phone:uniqueName.Phone,details})
    })

    customers2.forEach((customer, i) => {
        customer.Id = i + 1
    } )
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    //const [confirmLoading, setConfirmLoading] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false)
    };



    return (
        <div className='main-app'>
            <div className="App">
                <h2>Customer Dashboard</h2>
                {isLoggedIn ? 
                    (
                        <div>
                            <Button
                                className='login'
                                type="primary"
                                onClick={() => {
                                    const confirm = window.confirm('are you sure?')
                                    if(confirm){
                                        localStorage.clear()
                                        startUserLogout()
                                        history.go(0)                                   
                                    }                               
                                }}
                            >Logout
                            </Button>
                            <Button 
                                className='login'
                                type="primary"
                                onClick={() => showModal()}
                            >
                                Add Data
                            </Button>
                            <Modal
                                title=""
                                open={isModalOpen}
                                onOk={handleOk}
                                onCancel={handleCancel}
                                footer={null}
                            >
                                <div>
                                    <AddDetails handleCancel={handleCancel}/>
                                </div>
                            </Modal>
                        </div>
                    ) : (
                        <div>
                            <Button 
                                className='login'
                                type="primary"
                                onClick={() => showModal()}
                            >
                                login
                            </Button>
                            <Modal
                                title=""
                                open={isModalOpen}
                                onOk={handleOk}
                                onCancel={handleCancel}
                                footer={null}
                            >
                                <div>
                                    <Login handleCancel={handleCancel} useHistory={useHistory}/>
                                </div>
                            </Modal>
                            
                        </div>
                    )}
            </div>
            <div>
                {customers && <StatsContainer  customers={customers} />}
            </div>
            <CustomerContainer customers2={customers2}/>
            <OrdersContainer customers2={customers2}/>
        </div>
    );
}

export default App;
