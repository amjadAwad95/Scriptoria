import "./SearchResults.css"
import React, { useEffect, useState } from 'react';
import BookCard from "./BookCard";
import { useParams, useNavigate, Link } from "react-router-dom";
import { findStory } from "../../api/storyAPI";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
const SearchResultsPage = () => {
    const { criteria } = useParams()
    const [books, setBooks] = useState([])
    const navigate = useNavigate()

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await findStory(criteria)
                if (res.status === true) {
                    setBooks(res.stories)
                    return
                }
                navigate('/StoryErrorsPage')
                return
            } catch (error) {
                navigate('/ServersErrorPage')
                return
            }
        }
        fetchData()
    }, [])
    return (

        <>
            <Navbar />
            <div className="container-fluid d-flex justify-content-center align-items-center my-3" >
                <div className="row">
                    <div className="col text-center">
                        <div className="Search-container">
                            {books.map((book, index) => {
                                return (
                                    <React.Fragment key={index}>

                                        <BookCard
                                            storyId={book._id}
                                            imgURL={book.coverPhoto.data}
                                            description={book.description}
                                            name={book.title}
                                            rate={book.rate}
                                            key={index}
                                        />
                                    </React.Fragment >)
                            })
                            }

                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    );

};

export default SearchResultsPage;
