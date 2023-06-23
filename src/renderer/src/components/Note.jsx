/* eslint-disable react/prop-types */
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { baseAxios } from '../utils/baseAxios'
import { useNavigate } from 'react-router-dom'

const Note = ({ note }) => {
  const navigate = useNavigate()
  const handleDelete = async (id) => {
    await baseAxios.delete(`/${id}`)
  }

  const handleUpdate = (note) => {
    navigate('/auth/update-note', { state: note })
  }

  return (
    <div className="mt-3 p-3 border border-gray-600">
      <div className="flex items-center justify-between">
        <p className="text-gray-300 font-semibold">{note?.title}</p>
        <div className="flex gap-2">
          <AiOutlineEdit
            className="text-2xl cursor-pointer text-green-500"
            onClick={() => handleUpdate(note)}
          />
          <AiOutlineDelete
            className="text-2xl cursor-pointer text-red-500"
            onClick={() => handleDelete(note?._id)}
          />
        </div>
      </div>
      <p className="mt-2 text-justify text-gray-400">{note?.description}</p>
    </div>
  )
}

export default Note
