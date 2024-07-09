function Field(props) {
    const handleClick = (event) => console.log(event);

    return (
        <div className="grid grid-cols-8 gap-x-px">
            <div
                onClick={handleClick} //Notice that you're not calling the handleClick function with handleClick(). you're just passing a reference, the function will be called on runtime
            >
                {props.field}
            </div>
            
            <div
                className="border border-sky-500"
            >
                <input />
            </div>
        </div>
    )
}

export default Field;