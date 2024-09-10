import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { StorageSave } from '../helpers/StorageSave'

function AddBooks({ setListState }) {

    const [isChecked, setIsChecked] = useState(false)
    const [bookState, setBookState] = useState({
        title: '',
        author: '',
        readCheck: false,
    });


    const checkChange = e => {
        setIsChecked(e.target.checked);
    }



    const processFormData = e => {
        e.preventDefault();

        let target = e.target;
        let book = {
            id: new Date().getTime(),
            title: target.title.value,
            author: target.author.value,
            readCheck: isChecked
        }
        setBookState(book)
        console.log(book);



        setListState(elements => {
            return Array.isArray(elements) ? [...elements, book] : [book]
        })

        StorageSave('books', book)

        setIsChecked(false)
    }

    return (
        <>
            <h3>Agregar libro</h3>
            <form onSubmit={processFormData}>
                <label >Título:</label>
                <input type="text"
                    id="title"
                    name="title"
                    required />
                <br />
                <label >Autor:</label>
                <input type="text"
                    id="author"
                    name="author"
                />
                <Form.Check aria-label="option 1" name='readCheck' onChange={checkChange} checked={isChecked} />
                <label >Leido</label>
                <br />

                <input type="submit" value="Agregar" />
            </form>
        </>
    )
}

export default AddBooks;