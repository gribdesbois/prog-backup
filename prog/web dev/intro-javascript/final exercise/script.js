export class Book {
    constructor(title, author, description, pages, currentPage) {
      this.title=title;
      this.author=author;
      this.description=description;
      this.pages=pages;
      this.currentPage=currentPage;
      this.read=false;
      if (currentPage===pages) this.read=true;

    }

    readBook = (page) => {
      if (page <= 1 || page > this.pages) return 0;
      if (page >= 1 && page < this.pages) {
        this.currentPage=page;
        return 1;
      }else if (page === this.pages) {
        this.currentPage=page;
        this.read=true;
        return 1;
      }
    }


}

let firstBook = new Book('shazaam','michael gray','michael gray\'s autobiography',320,4);
let secondBook = new Book('Big Ass Title', 'on s\'en fout du name', 'bla bla bla...', 412,156);
let thirdBook = new Book('Big Ass Taitle', 'Big Ass Name', 'blablabybel...', 220,100);
let fourthBook = new Book('Big Ass fourth Title', 'Big fourthAss Name', 'enough with descriptions already...', 1220,0);
let fifthBook = new Book('Fifth\'Story', 'Abe Lincoln', 'comme le port salud...', 820,350);
let sixthBook = new Book('Big Ass Title', 'Big Ass Name', 'plein le cul...', 350,100);


export const books = [firstBook, secondBook, thirdBook,fourthBook,fifthBook,sixthBook];
