import { Form, Formik } from 'formik'
import { TextInput } from '../utils/FormikHelper'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { baseAxios } from '../utils/baseAxios'
import { useState } from 'react'

const validateInputs = Yup.object({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string().required('Password is required')
})

const Login = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('')

  return (
    <div className="h-screen w-full bg-bgPrimary flex justify-center items-center">
      <div className="flex flex-col gap-6 w-[90%] xs:w-[400px]">
        <div>
          <p className="text-3xl text-white font-semibold text-center">Welcome Back!</p>
          <p className="text-gray-300 tracking-wide text-center">
            We are so excited to see you again!
          </p>
          {error !== '' && <p className="text-center -mb-4 text-red-500 font-bold mt-2">{error}</p>}
        </div>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={validateInputs}
          onSubmit={async (values, { resetForm }) => {
            try {
              const { email, password } = values
              if (email && password) {
                const response = await baseAxios.post('/login', {
                  email,
                  password
                })
                const token = response.data.token
                localStorage.setItem('token', JSON.stringify(token))
                setError('')
                resetForm()
                navigate('/auth')
              }
            } catch (error) {
              setError(error.response.data.message)
            }
          }}
        >
          <Form className="flex flex-col gap-2">
            <TextInput name="email" type="email" placeholder="Email" />
            <TextInput name="password" type="password" placeholder="Password" />
            <button
              type="submit"
              className="w-full bg-btnColor p-2 text-white font-bold border-none outline-none opacity-90 cursor-pointer duration-200 hover:opacity-100 mt-3 rounded-md"
            >
              Sign In
            </button>
            <p className="text-gray-400">
              Need an account?{' '}
              <span className="text-cyan-400 cursor-pointer" onClick={() => navigate('/reg')}>
                Register
              </span>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Login
