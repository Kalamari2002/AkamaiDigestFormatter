import Adder from "./Adder.jsx";

function ListGroup() {
    return (
        <>
            <h1>Add Articles</h1>
            <Adder />
        </>
    )
   /* 
   return (
        <>
            <h1>List</h1>
            <ul className="list-none">
                {entries.map((entry) => (
                    <Article artigo={entry.getIdx()} key={entry.getIdx()}/>
                ))}
            </ul>
            <Footer handleAdd={handleAdd}/>
        </>
  );*/
}

export default ListGroup;