import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
const App = () => {
  const formik=useFormik({
    initialValues:{
      name:"",
      email:"",
      password:""
    },
    validationSchema:Yup.object({
      name:Yup.string()
      .required("Name is required"),
      email:Yup.string()
      .required("Email is required"),
      password:Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required("Password is required"),

    }),
     onSubmit: (values, { resetForm }) => {
      console.log(values)
      resetForm()
    }
  })
  return (
    <div>
      <h1>Register Form</h1>
      <form action="" onSubmit={formik.handleSubmit}>
        <input type="text" name='name' placeholder='name' onChange={formik.handleChange} onBlur={formik.handleBlur} />
        |{formik.touched.name && formik.errors.name &&(
          <p style={{ color: 'red' }}>{formik.errors.name}</p>
        )}
        <br /><br />
         <input type="text" name='email' placeholder='email' onChange={formik.handleChange} onBlur={formik.handleBlur} />
        |{formik.touched.email && formik.errors.email &&(
          <p style={{ color: 'red' }}>{formik.errors.email}</p>
        )}
        <br /><br />
         <input type="text" name='password' placeholder='password' onChange={formik.handleChange} onBlur={formik.handleBlur} />
        |{formik.touched.password && formik.errors.password &&(
          <p style={{ color: 'red' }}>{formik.errors.password}</p>
        )}
        <br /><br />
        <button type="submit">Register</button>
      </form>

    </div>
  )
}

export default App