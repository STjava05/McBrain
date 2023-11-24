import React from 'react'
import './single.css'

function Single() {

    return (
        <div>
            <div className="single">
                <div className="singleWrapper">
                    <img className="singleImg" src="https://tribuneonlineng.com/wp-content/uploads/2020/12/OONI1.jpg" alt="" />
                    <h1 className="singleTitle">
                        Ooni of Ife unveils
                        <div className="singleEdit">
                            <i className="singleIcon far fa-edit"></i>
                            <i className="singleIcon far fa-trash-alt"></i>
                        </div>
                    </h1>
                    <div className="singleInfo">
                        <span className="singleAuthor">Author: <b>Adesoji Aderemi</b></span>
                        <span className="singleDate">1 hour ago</span>
                    </div>
                    <p className="singleDesc">
                        It was an evening of tradition, pomp and ceremony as the Ooni of Ife, Oba Enitan Ogunwusi, on Tuesday, formally unveiled his new son, Prince Adesoji Aderemi, at his palace in Ile Ife, Osun State.

                        It would be recalled that the Ooni of Ife on November 18 announced the birth of his son with his wife, Olori Naomi Silekunola Ogunwusi, after two years of marriage, saying both the mother and child were in good condition.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Single
