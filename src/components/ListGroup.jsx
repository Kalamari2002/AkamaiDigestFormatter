
import Adder from "./Adder.jsx";
function ListGroup() {
    const itemConfig = "w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600";


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