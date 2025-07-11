function Library (){
    this.books = [];
}
Library.prototype.addBook = function (bookname){
    this.books.push(bookname);
    console.log(this.books);
}
Library.prototype.findBook = function(name){
    for(i=0;i<this.books.length;i++){
        if(this.books[i] === name){
            console.log(`${name} found at index ${i}`);
        }
    }
}
const lib1 = new Library();
lib1.addBook('the one thing');
lib1.addBook('ikigai');
lib1.addBook('mahabharat');
lib1.findBook('the one thing');
lib1.findBook('mahabharat');
