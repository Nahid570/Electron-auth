/* eslint-disable react/prop-types */
import { useField } from 'formik'

export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className="p-2 outline-none focus:border border-green-800 rounded-md text-lg bg-gray-700 w-full text-gray-300"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? <p className="text-gray-400 mt-1">{meta.error}</p> : null}
    </>
  )
}

export const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        {...field}
        {...props}
        className="p-2 outline-none focus:border border-green-800 rounded-md text-lg bg-gray-700 w-full text-gray-300"
      />
      {meta.touched && meta.error ? <p className="text-gray-400 mt-1">{meta.error}</p> : null}
    </>
  )
}
