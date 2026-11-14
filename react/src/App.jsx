import React from 'react'
import { useForm } from 'react-hook-form'
const App = () => {
  const {
    register,
    handleSubmit,
    formState:{errors},
    reset
  }=useForm()

  const onsubmit=(data)=>{
    console.log(data);
    reset()
  }
  return (
    <div>
      <h1>Register Form</h1>
      <form action="" onSubmit={handleSubmit(onsubmit)}>
        <input type="text" placeholder='name' {...register('name',{
          required:'Name is required'
        })} />
        {errors.name && <p>{errors.name.message}</p>}
        <br /><br />
        <input type="text" placeholder='age' {...register('age',{
          required:'Age is required'
        })} />
        {errors.age && <p>{errors.age.message}</p>}
        <br /><br />
        <input type="text" placeholder='email' {...register('email',{
          required:'Email is required'
        })} />
        {errors.email && <p>{errors.email.message}</p>}
        <br /><br />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default App