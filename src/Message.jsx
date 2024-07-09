function Message() {
    const name = 'Yu'
    
    if(name) //About the '{}'. Inside the braces, you can put any javascript operation, as long as it returns something
        return <h1>Hello {name}</h1>
    return <h1>名前なし</h1>
}

export default Message;