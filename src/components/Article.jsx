import Field from "./Field";

//pass an object with { item }
function Article(props) {

    return (
        <div className="">
            <li onClick={console.log(props.id)} className="">
                <p className= "text-digest-blue text-[14.5px]">
                    <a href={props.link}>{props.title}</a><em className="text-black"> by {props.author}</em>
                </p>
            </li>
        </div>
    );
}

export default Article;