import { Form, Formik } from 'formik'
import { TextArea, TextInput } from '../utils/FormikHelper'
import * as Yup from 'yup'
import { baseAxios } from '../utils/baseAxios'
import { useLocation, useNavigate } from 'react-router-dom'

const validateInputs = Yup.object({
  title: Yup.string().required('Title is required')
})

const UpdateNote = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  return (
    <div className="w-full min-h-screen bg-bgPrimary p-3">
      <div className="flex gap-4 flex-col sm:flex-row">
        <div className="flex-[2]">
          <Formik
            initialValues={{
              title: state?.title,
              description: state?.description
            }}
            validationSchema={validateInputs}
            onSubmit={async (values, { resetForm }) => {
              try {
                const { title, description } = values
                await baseAxios.patch(`/${state._id}`, {
                  title,
                  description
                })
                navigate('/auth')
                resetForm()
              } catch (error) {
                console.log(error)
              }
            }}
          >
            <Form className="flex flex-col gap-3">
              <TextInput name="title" type="text" placeholder="Title" />
              <TextArea name="description" placeholder="Write Something..." rows={5} />
              <button
                type="submit"
                className="w-full bg-btnColor p-2 text-white font-bold border-none outline-none opacity-90 cursor-pointer duration-200 hover:opacity-100 mt-3 rounded-md"
              >
                Update Note
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default UpdateNote
