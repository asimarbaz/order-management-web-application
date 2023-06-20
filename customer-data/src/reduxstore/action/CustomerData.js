import axios from 'axios'

export const startCreateCustomer = (data, redirect) => {
    return (dispatch) => {
        axios.post('http://localhost:3040/api/user/customerdata', data, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
             .then((res) => {
                const customer = res.data
                console.log(customer)
                dispatch(createCustomer(customer))
                redirect()
             })
             .catch((err) => {
                alert(err.message)
             })
    }
}

const createCustomer = (data) => {
    return {
        type:'ADD_CUSTOMER',
        payload: data
    }
}

export const startListCustomer = () => {
    return (dispatch) => {
        axios.get('http://localhost:3040/api/user/customerdata')
             .then((res) => {
                const customer = res.data
                dispatch(listCustomer(customer))
             })
             .catch((err) => {
                alert(err.message)
             })
    }
}

const listCustomer = (data) => {
    return {
        type:'LIST_CUSTOMER',
        payload: data
    }
}
