import React, {useState} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import books from "../data/data.json"

const IndexPage = () => {
    
    const [q, setQ] = useState("");
    
    /*
    //const image_path = '../../static/images/';
    const [books, setBooks] = useState([]);
    const url = '../../data.json';
    const getBooks = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setBooks(data)
        //console.log(data);
    }
    
    useEffect (() => {
        getBooks();
    }, []);
    */

    const search = (rows) => {
        return rows.filter(
            (row) => 
                row.title.toLowerCase().indexOf(q) > -1 ||
                row.isbn.toLowerCase().indexOf(q) > -1
        );
    }

    return (
        <Layout>
            <SEO title="Home" />

            <h2>Featured Books</h2>
            <section>
                <div className="search">
                    <input type="text" placeholder="" value={q} onChange={(e) => setQ(e.target.value)} />
                </div>
            
                <div className="books">
                    {search(books) ? search(books).map((book, idx) => {
                        return (
                            <div className="book" key={idx}>
                                <div className="book_image"> 
                                    <span>New</span>
                                    <img src={book.thumbnailUrl} alt=""/> 
                                </div>
                                <div className="book_detail">
                                    <h3 className="book_title">{book.title}</h3>
                                    <div className="book_author">isbn {book.isbn}</div>
                                    <div className="book_rating">{book.publishedDate.$date}</div>
                                </div>
                            </div>
                        )
                    }): "Loading"}
                </div>

            </section>
        </Layout>
    )
}

export default IndexPage
