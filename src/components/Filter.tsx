import '../styles/Filter.scss'

function Filter({filter}:any) {
    const handleFilter = (event:any) => {
        filter.setFilter(event.target.value);
    }

    return <>
        <div className="filter">
            <h4>Filter: </h4>
            <select className="selected" onChange={handleFilter}>
                <option selected value="*">All</option>
                <option value="Fullstack">Fullstack</option>
                <option value="Frontend">Frontend</option>
                <option value="UI">UI</option>
                <option value="OS">OS</option>
                <option value="C++">C++</option>
                <option value="File Systems">File System</option>
            </select>
        </div>
    </>
}

export default Filter;
