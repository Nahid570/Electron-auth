import { Form, Formik } from 'formik'
import { TextInput } from '../utils/FormikHelper'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { baseAxios } from '../utils/baseAxios'

const validateInputs = Yup.object({
  fullName: Yup.string().required('Name is required'),
  email: Yup.string().email().required('Email is required'),
  password: Yup.string().required('Password is required'),
  cpassword: Yup.string().required('Confirm your password')
})

const Registration = () => {
  const navigate = useNavigate()
  return (
    <div className="h-screen w-full bg-bgPrimary flex justify-center items-center">
      <div className="flex flex-col gap-6 w-[90%] xs:w-[400px]">
        <div>
          <p className="text-3xl text-white font-semibold text-center">Join Us!</p>
          <p className="text-gray-300 tracking-wide text-center">
            Can&apos;t wait to see you in our community!
          </p>
        </div>
        <Formik
          initialValues={{
            fullName: '',
            email: '',
            password: '',
            cpassword: ''
          }}
          validationSchema={validateInputs}
          onSubmit={async (values, { resetForm }) => {
            try {
              const { fullName, email, password, cpassword } = values
              if (fullName && email && password === cpassword) {
                await baseAxios.post('/register', {
                  fullName,
                  email,
                  password,
                  cpassword
                })
                resetForm()
                navigate('/')
              }
            } catch (error) {
              console.log(error)
            }
          }}
        >
          <Form className="flex flex-col gap-2">
            <TextInput name="fullName" type="text" placeholder="Full name" />
            <TextInput name="email" type="email" placeholder="Email" />
            <TextInput name="password" type="password" placeholder="Password" />
            <TextInput name="cpassword" type="password" placeholder="Confirm password" />
            <button
              type="submit"
              className="w-full bg-btnColor p-2 text-white font-bold border-none outline-none opacity-90 cursor-pointer duration-200 hover:opacity-100 mt-3 rounded-md"
            >
              Sign Up
            </button>
            <p className="text-gray-400">
              Have an account?{' '}
              <span className="text-cyan-400 cursor-pointer" onClick={() => navigate('/')}>
                Login
              </span>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Registration
