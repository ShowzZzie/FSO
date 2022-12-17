const Filter = ({handleFilter}) => {
    return (
        <div>
            Search/filter: <input onChange={handleFilter}/>
        </div>
    )
}

export {Filter}