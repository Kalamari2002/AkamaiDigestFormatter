function Button(props) {
    return <div onClick={props.func}>
        {props.name}
    </div>
}

export default Button;