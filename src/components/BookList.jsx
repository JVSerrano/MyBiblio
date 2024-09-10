import React, { useEffect } from "react";

function BookList({ readState, listState, setListState}) {

    // const [listState, setListState] = useState([])

    useEffect(() => {
        console.log('UseEffect cargado')
        getBooks()
    }, [])


    const getBooks = () => {
        let books = JSON.parse(localStorage.getItem('books'))
        setListState(books)

        return books
    }

    const deleteBook = (id) => {
       let recive_books =getBooks()
       let newArray = recive_books.filter(book=>book.id !== parseInt(id))

       setListState(newArray)
       
       localStorage.setItem('books', JSON.stringify(newArray))
    }

    const readBook = (id)=>{
      let recive_books=getBooks()
      let updateBooks = recive_books.map(book=>{
        if(book.id === id){
            return {
                ... book, readCheck: true
            }
        }
        return book
      })

      setListState(updateBooks)
       localStorage.setItem('books', JSON.stringify(updateBooks))
    }

    


    return (
        <>
            {listState != null ? listState.filter(book => book.readCheck === readState)
                .map(element => {
                    if(readState === true){
                        return (
                            <article key={element.id} className="bookClass">
                            <h5>{element.title}</h5>
                            <p>-{element.author}</p>
                            <button className="delete-button" onClick={()=>deleteBook(element.id)}>Eliminar</button>
                          </article>
                        ) 
                    }else{
                        return (
                            <article key={element.id} className="bookClass">
                            <h5>{element.title}</h5>
                            <p>-{element.author}</p>
                            <div className="btnClass">
                            <button className="read-button" onClick={()=>readBook(element.id)}>Leido</button>
                            <button className="delete-button" onClick={()=>deleteBook(element.id)}>Eliminar</button>
                            </div>
                            
                          </article>
                        ) 
                    }
                   
                })
                :
                    <strong></strong>
        }

        </>
    )
}

export default BookList;