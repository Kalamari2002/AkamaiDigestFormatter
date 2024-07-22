import Adder from "./Adder.jsx";

function ListGroup() {
    return (
        <>
            <h1 className="flex justify-center items-center font-comic font-bold text-[32px] text-vapor-pink pb-6">giga digest formatter 4000</h1>
            <div className="flex justify-center items-center">
                <Adder />
            </div>
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