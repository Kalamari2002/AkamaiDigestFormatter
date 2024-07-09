import { MouseEvent, useState } from "react";
import Button from "./Button";
import Field from "./Field";
import Entry from "../classes/Entry.js"
import Article from "./Article";
function Adder() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [link, setLink] = useState("");

    const [idx, setIdx] = useState(0);
    const [entries, setEntries] = useState([]);
    
    const handleAdd = () => {
        console.log("EntryAdded");
        //var newEntry = new Entry ("","","","", idx);
        var newEntry = new Entry(title, author, category, link, idx);
        setEntries([...entries, newEntry]);
        setIdx(idx + 1);
    }

    const changeTitle = event => {
        setTitle(event.target.value);
    }
    const changeAuthor = event => {
        setAuthor(event.target.value);
    }
    const changeCategory = event => {
        setCategory(event.target.value);
    }
    const changeLink = event => {
        setLink(event.target.value);
    }
    return (
        <div className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <li className="w-64 text-red-600 flex flex-col">
                <div className="grid grid-cols-2 gap-2 grid grid-rows-4 gap-2">
                
                <label htmlFor="title">Title</label>
                <input onChange={changeTitle} value={title} type="text" id="title" className="bg-red-50 border border-red-500"/>
                
                <label htmlFor="author">Author</label>
                <input onChange={changeAuthor} value={author} type="text" id="author" className="bg-red-50 border border-red-500"/>


                <label htmlFor="category">Category</label>
                <input onChange={changeCategory} value={category} type="text" id="category" className="bg-red-50 border border-red-500"/>

                <label htmlFor="link">Link</label>
                <input onChange={changeLink} value={link} type="text" id="link" className="bg-red-50 border border-red-500"/>

                </div>

                <Button name="Add" func={handleAdd} key="Add"/>
            </li>
            <>
            <h1>List</h1>
                <ul className="list-none">
                    {entries.map((entry) => (
                        <Article title={entry.getTitle()} author={entry.getAuthor()} link={entry.getLink()} key={entry.getIdx()}/>
                    ))}
                </ul>
            </>
        </div>
    );
}

export default Adder;