import Button from "./Button";

function Footer(props) {

    return (
        <div className="font-comic font-bold text-[20px] flex space-x-4 pt-4 pb-8">
            <button onClick={props.addFunc} className="bg-transparent w-32 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Add
            </button>
            <button onClick={console.log("Delete")} className="bg-transparent w-32 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Delete
            </button>
        </div>
    );
}

export default Footer;