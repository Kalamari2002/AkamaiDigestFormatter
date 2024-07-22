import { useState } from "react";
import Button from "./Button";
import Entry from "../classes/Entry.js"
import ArticleSet from "./ArticleSet.jsx";
import Footer from "./Footer.jsx";
function Adder() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("0");
    const [link, setLink] = useState("");

    const [idx, setIdx] = useState(0);
    const [entries, setEntries] = useState([]);

    const [growthEntries, setGrowthEntries] = useState([]);
    const [authorityEntries, setAuthorityEntries] = useState([]);
    const [brandEntries, setBrandEntries] = useState([]);
    const [customerEntries, setCustomerEntries] = useState([]);
    const [empowerEntries, setEmpowerEntries] = useState([]);


    
    const handleAdd = () => {
        
        //var newEntry = new Entry ("","","","", idx);
        var newEntry = new Entry(title, author, category, link, idx);
        const entryCat = parseInt(newEntry.getCategory());

        switch(entryCat){
            case 0:
                setGrowthEntries([...growthEntries, newEntry])
                break;
            case 1:
                setAuthorityEntries([...authorityEntries, newEntry])
                break;
            case 2:
                setBrandEntries([...brandEntries, newEntry])
                break;
            case 3:
                setCustomerEntries([...customerEntries, newEntry])
                break;
            case 4:
                setEmpowerEntries([...empowerEntries, newEntry])
                break;
        }
        //setEntries([...entries, newEntry]);
        setIdx((idx+1));
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
        <div className="h-screen py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <li className="w-64 text-vapor-pink flex flex-col">
                <div className="grid grid-cols-2 gap-2 grid grid-rows-4 gap-2">
                
                <label htmlFor="title" className="font-comic font-bold text-[24px]">Title</label>
                <input onChange={changeTitle} value={title} type="text" id="title" className="bg-red-50 border border-vapor-pink"/>
                
                <label htmlFor="author" className="font-comic font-bold text-[24px]">Author</label>
                <input onChange={changeAuthor} value={author} type="text" id="author" className="bg-red-50 border border-vapor-pink"/>

                <label htmlFor="link" className="font-comic font-bold text-[24px]">Link</label>
                <input onChange={changeLink} value={link} type="text" id="link" className="bg-red-50 border border-vapor-pink"/>

                <label htmlFor="category" className="font-comic font-bold text-[24px]">Category</label>
                <select onChange={changeCategory} id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value={0}>-</option>
                    <option value={0}>Drive Growth</option>
                    <option value={1}>Build Visibility & Authority</option>
                    <option value={2}>Build Our Brand</option>
                    <option value={3}>Evolve Our Customer Experience</option>
                    <option value={4}>Work with Purpose and Empower our People</option>
                </select>


                </div>
                <Footer addFunc={handleAdd} />
            </li>
            <>
                <ul className="list-none">

                    <ul className="bold text-[16px]">
                        <ArticleSet title="MCG: Drive Growth" entries={growthEntries}/>
                        <ArticleSet title="MCG: Build Visibility & Authority" entries={authorityEntries}/>
                        <ArticleSet title="MCG: Build Our Brand" entries={brandEntries}/>
                        <ArticleSet title="MCG: Evolve Our Customer Experience" entries={customerEntries}/>
                        <ArticleSet title="MCG: Work with Purpose and Empower our People" entries={empowerEntries}/>
                    </ul>
                </ul>
            </>
        </div>
    );
}

export default Adder;