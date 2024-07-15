import Article from "./Article";

function ArticleSet({title, entries}){
    return (
        <ul>
            <li><b>{title}</b></li>
            {entries.map((entry) => (
                <Article title={entry.getTitle()} author={entry.getAuthor()} link={entry.getLink()} category={entry.getCategory()} key={entry.getIdx()} id={entry.getIdx()}/>
            ))}
        </ul>
    );
}
export default ArticleSet;