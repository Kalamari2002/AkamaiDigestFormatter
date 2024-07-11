import Button from "./Button";

function Footer(props) {
    const handleGenerage = () => {console.log("Generate");}
    const handleAdd = () => {console.log("Generate");}
    return (
        <div className= "flex flex-row gap-x-4">
            <div>
                <Button name="Generate" func={handleGenerage} key="Generate"/>
            </div>
            <div>
                <Button name="Add" func={props.handleAdd} key="Add"/>    
            </div>
        </div>
    );
}

export default Footer;