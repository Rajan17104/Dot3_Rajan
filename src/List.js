import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'reactstrap';

function List(props) {



    const handledata = () =>{
        window.location = './Bookdata'
    }

    const data = [
        {
            id: 1,
            name: 'Book1',
            langauge: 'eng',
            description: 'Best',
            url: "https://picsum.photos/200/300"

        },
        {
            id: 2,
            name: 'Book2',
            langauge: 'hindi',
            description: 'Good',
            url: "https://picsum.photos/200/400"

        },
        {
            id: 3,
            name: 'Book3',
            langauge: 'gujrati',
            description: 'Nice',
            url: "https://picsum.photos/200/500"

        },
        {
            id: 4,
            name: 'Book4',
            langauge: 'eng,hindi',
            description: 'Very good',
            url: "https://picsum.photos/200/600"

        },

    ];

    return (
        <div className="row">

            <h1>Book List</h1>
            {
                data.map((v) => {
                    return (
                        <div className="col-lg-6 d-flex">
                            <Card className="member d-flex align-items-start">
                                <div className="pic"><img src={v.url} className="img-book" alt='' /></div>
                                <div className="member-info">
                                    <h4> Book name: {v.name}</h4>
                                    <h5>Book Langauge: {v.langauge}</h5>
                                    <h5>Book Information: {v.description}</h5>
                                </div>
                            </Card>
                            <Button className='btn'onClick={handledata}/>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default List;