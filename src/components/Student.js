function Student({name, grade}) {
    return ( <div className="student">
        <h2 className="student__name">{name}</h2>
        <h3 className="student__grade">{grade} класс</h3>
    </div> );
}

export default Student;