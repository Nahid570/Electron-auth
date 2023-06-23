import { Form, Formik } from 'formik'
import { TextArea, TextInput } from '../utils/FormikHelper'
import * as Yup from 'yup'
import Note from '../components/Note'
import { baseAxios } from '../utils/baseAxios'
import { useState } from 'react'

const validateInputs = Yup.object({
  title: Yup.string().required('Title is required')
})

const Notes = () => {
  const [allNotes, setAllNotes] = useState([])

  // Get All notes from database
  const getAllNotes = async () => {
    const { data } = await baseAxios.get('/all-notes')
    setAllNotes(data)
  }
  getAllNotes()

  return (
    <div className="w-full min-h-screen bg-bgPrimary p-3">
      <div className="flex gap-4 flex-col sm:flex-row">
        <div className="flex-[2]">
          <Formik
            initialValues={{
              title: '',
              description: ''
            }}
            validationSchema={validateInputs}
            onSubmit={async (values, { resetForm }) => {
              try {
                const { title, description } = values
                await baseAxios.post('/create-note', { title, description })
              } catch (error) {
                console.log(error)
              }
              resetForm()
            }}
          >
            <Form className="flex flex-col gap-3">
              <TextInput name="title" type="text" placeholder="Title" />
              <TextArea name="description" placeholder="Write Something..." rows={5} />
              <button
                type="submit"
                className="w-full bg-btnColor p-2 text-white font-bold border-none outline-none opacity-90 cursor-pointer duration-200 hover:opacity-100 mt-3 rounded-md"
              >
                Create Note
              </button>
            </Form>
          </Formik>
        </div>
        <div className="flex-[2]">
          {allNotes?.map((note) => (
            <Note key={note._id} note={note} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Notes
