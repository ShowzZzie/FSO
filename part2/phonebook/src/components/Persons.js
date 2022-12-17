const Persons = ({persons, newFilter, deleteTest}) => {
    return (
        <div>
            {persons.filter(elem => elem.name.toLowerCase().includes(newFilter.toLowerCase()))
            .map((elem)=><div key={elem.id}>{elem.name} {elem.number} <button onClick={() => deleteTest(elem.id)}>Delete</button></div>)}
        </div>
    )
}

export {Persons}