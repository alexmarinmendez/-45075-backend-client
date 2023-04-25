import {useState} from 'react'
import axios from 'axios'

const App = () => {
  const [input, setInput] = useState({
    first_name: '',
    last_name: '',
    email: ''
  })

  const handleInputChange = evt => {
    setInput(prev => ({...prev, [evt.target.name]: evt.target.value}))
  }

  const handleSubmit = async(evt) => {
    evt.preventDefault()
    try {
      await axios('http://localhost:8081/users', {
        method: 'post',
        data: JSON.stringify(input),
        headers: {
          'Content-type': 'application/json'
        }
      })
    }catch(err){ console.log(err) }
  }

  return (
    <>
      <h1>Registrar usuario</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" name="first_name" value={input.first_name} onChange={(evt) => handleInputChange(evt)} />
          <label>Apellido:</label>
          <input type="text" name="last_name" value={input.last_name} onChange={(evt) => handleInputChange(evt)} />
          <label>Email:</label>
          <input type="text" name="email" value={input.email} onChange={(evt) => handleInputChange(evt)} />
          <input type="submit" />
        </div>
      </form>
    </>
  )
}

export default App