export default class Entry{
    constructor(title, author, category, link, idx){
        this.title = title;
        this.category = category;
        this.author = author;
        this.link = link;
        this.idx = idx;
    }

    setTitle(title){
        this.title = title;
    }
    setAuthor(author){
        this.author = author;
    }
    setCategory(category){
        this.category = category;
    }
    setLink(link){
        this.link = link;
    }

    getTitle(){
        return this.title;
    }
    getAuthor(){
        return this.author;
    }
    getCategory(){
        return this.category;
    }
    getLink(){
        return this.link;
    }
    getIdx(){
        return this.idx;
    }
}