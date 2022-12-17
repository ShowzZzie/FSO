const PersonForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                name: <input onChange={props.handleNewName} />
            </div>
            <div>
                number: <input onChange={props.handleNewNumber} />
            </div>
            <button type="submit">add</button>
        </form>
    )
}

export {PersonForm}