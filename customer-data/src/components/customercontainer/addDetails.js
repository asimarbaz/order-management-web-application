import { useState } from "react"
import { startCreateCustomer } from "../../reduxstore/action/CustomerData"
import { useHistory } from 'react-router-dom'
import { useDispatch } from "react-redux"


const AddDetails = (props) => {
    const { handleCancel } = props
    const [name, setName] = useState()
    const [amount, setAmount] = useState()
    const [date, setDate] = useState()
    const [phone, setPhone] = useState()
    const history = useHistory()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            Date:date.substr(0,10),
            Phone:phone,
            Name:name.charAt(0).toUpperCase() + name.slice(1),
            Amount:amount
        }
        const redirect = () => {
            alert('data added')
            history.go(0)
        }
        dispatch(startCreateCustomer(data, redirect))
    }


    return (
        <div>
            <h3>add Details</h3>
            <form className="form" onSubmit={handleSubmit}>
                <label>Customer Name:</label><br/>
                <input 
                    type="text"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                ></input>

                <br/>

                <label>Amount:</label><br/>
                <input
                    type="number"
                    value={amount}
                    required
                    onChange={(e) => setAmount(e.target.value)}
                ></input>

                <br/>

                <label>Date:</label><br/>
                <input
                    type="date"
                    value={date}
                    required
                    onChange={(e) => setDate(e.target.value)}
                ></input>

                <br/>

                <label>Phone:</label><br/>
                <input
                    type="number"
                    value={phone}
                    minLength={10}
                    maxLength={10}
                    required
                    onChange={(e) => setPhone(e.target.value)}
                ></input>

                <br/>

                <input type="submit" value="submit" className='submit'/>
                <button onClick={handleCancel} type="button" className="submit">cancel</button>

            </form>
        </div>
    )
}

export default AddDetails