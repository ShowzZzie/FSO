import { useEffect, useState } from 'react'
import { Persons } from './components/Persons'
import { PersonForm } from './components/PersonForm'
import { Filter } from './components/Filter'
import { Notification } from './components/Notification'
import service from './services/servercom'

const App = () => {
  const [persons, setPersons] = useState([])
  
  useEffect(() => {
    /*axios.get('http://localhost:3001/persons')
         .then(response => {
          setPersons(response.data)
         })*/
      service.getAll().then(initial => setPersons(initial))
  }, [])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [type, setType] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const object = {
      name: newName,
      number: newNumber
    }

    if (!newName) {
      if (!newNumber) {
        alert("The input fields cannot be empty")
        return
      }
      else {
        alert("The 'name' field cannot be empty")
        return
      }
    }
    if (!newNumber) {
      alert("The 'number' field cannot be empty")
      return
    }

    if (persons.find(elem=>elem.number === newNumber)) {
      alert("The number " + newNumber + " is already in the phonebook")
      return
    }

    if (persons.find(elem=>elem.name.toLowerCase() === newName.toLowerCase())) {
      if (window.confirm(newName + " is already in the phonebook, would you like to replace the old number with the new one?")) {
        const temp = persons.find(elem=>elem.name.toLowerCase() === newName.toLowerCase())
        const tempid = temp.id
        service.put(tempid, object)
               .then(response => {
                setPersons(persons.map(person => person.id !== tempid ? person : response))
                setMessage(temp.name + "'s phone number has been changed!")
                setType('success')
                setTimeout(() => {
                  setMessage(null)
                  setType(null)
                }, 5000)
              })
               .catch(error => {
                setMessage('This person was removed from the phonebook earlier')
                setType('error')
                setTimeout(() => {
                  setMessage(null)
                  setType(null)
                }, 5000)
               })
        return
      }
      else {
        return
      }
      /*alert(newName + " is already in the phonebook")
      return*/
    }
    
    /*axios.post('http://localhost:3001/persons', object)
         .then(response => setPersons(response.data))
         .catch(error => console.error(error))*/
    setMessage('Added ' + newName)
    setType('success')
    setTimeout(() => {
      setMessage(null)
      setType(null)
    }, 5000)
    service.add(object).then(response => setPersons(persons.concat(response)))
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }
  
  const handleFilter = (event) => {
    setNewFilter(event.target.value)
  }

  const deleteTest = (info) => {
    if (window.confirm('Do you want to delete this contact?')) {
      service.deletion(info)
             .catch(error => {
                  setMessage('This person was already deleted')
                  setType('error')
                  setTimeout(() => {
                    setMessage(null)
                    setType(null)
                  }, 5000)
                  service.getAll().then(res => setPersons(res.filter(contact => contact.id !== info)))
              })
             .then(response => setPersons(response.filter(contact => contact.id !== info)))
             
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={message} type={type} />

      <Filter handleFilter={handleFilter} />

      <h3>Add a new</h3>

      <PersonForm 
        handleSubmit={handleSubmit}
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
      />

      <h3>Numbers</h3>

      <Persons persons={persons} newFilter={newFilter} deleteTest={deleteTest} />
    </div>
  )
}

export default App