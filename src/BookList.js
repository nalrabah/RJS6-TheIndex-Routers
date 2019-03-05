import React, { Component } from "react";
import BookRow from "./BookRow";
import SearchBar from "./SearchBar";

class BookList extends Component {
  state = {
    filteredBooks: this.props.books
  };
  filterBooks = query => {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book =>
      `${book.title}`.toLowerCase().includes(query)
    );
    this.setState({ filteredBooks: filteredBooks });
  };

  byColor = () => {
    let filteredBooks = this.props.books.filter(
      book => `${book.color}`.toLowerCase() === this.props.match.params.color
    );
    return filteredBooks;
  };
  render() {
    let bookRows;
    if (this.props.match.params.color) {
      let books = this.byColor();
      bookRows = books.map(book => <BookRow key={book.id} book={book} />);
    } else
      bookRows = this.state.filteredBooks.map(book => (
        <BookRow key={book.id} book={book} />
      ));
    return (
      <div>
        <div>
          <h3>Books</h3>
          <SearchBar onChange={this.filterBooks} />
        </div>
        <table className="mt-3 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>{bookRows}</tbody>
        </table>
      </div>
    );
  }
}

export default BookList;
