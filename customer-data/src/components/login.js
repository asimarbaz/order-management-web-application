import { useFormik } from 'formik'
import * as Yup from "yup"
import { useDispatch } from 'react-redux'
import { startLoginUser } from '../reduxstore/action/User'


const Login = (props) => {
    const {handleCancel, useHistory } = props
    const history = useHistory()
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email:'',
            password:''
        },
        validationSchema:Yup.object({
            email:Yup.string().required(),
            password:Yup.string().required()
        }),
        onSubmit:function(values, { resetForm }){
            const redirect = () => {
                alert('successfully logged in')
                //history.push('/')
                history.go(0)
            }
            console.log(values)
            dispatch(startLoginUser(values, resetForm, redirect))
            // axios.post('http://localhost:3040/api/user/login', values)
            //      .then((res) => {
            //         const token = res.data
            //         if(res.data.token){
            //             localStorage.setItem('token', res.data.token)
            //             resetForm()
            //             redirect()
            //         }
            //         else{
            //             alert('invalid email or password')
            //         }
            //      })
            //      .catch((err) => {
            //         alert(err.message)
            //      })
        }
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit} className="form">
                <h2>Login</h2>

                <label>email:</label><br/>
                <input
                    type="email"
                    value={formik.values.email}
                    name="email"
                    onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email && <span>{ formik.errors.email }</span>}

                <br/>

                <label>password:</label><br/>
                <input
                    type="password"
                    value={formik.values.password}
                    name="password"
                    onChange={formik.handleChange}
                />
                
                {formik.touched.password && formik.errors.password && <span>{ formik.errors.password }</span>}
                <br/>
                

                <input type="submit" value="submit" className='submit'/>
                <button onClick={handleCancel} type="button">cancel</button>
                
            </form>
        </div>
    )
}

export default Login