import React from 'react'

type AppProps = {
    current_page: number,
    total: number,
    last_page: number,
    numberClick: (num: number) => void,
    previousClick: () => void,
    nextClick: () => void,
};


function Pagination({
    current_page,
    total,
    last_page,
    numberClick,
    previousClick,
    nextClick,

}: AppProps) {


    const getNumberIndex = (num: number) => {
        numberClick(num)
    }

    return (
        <nav>
            {
                total === 0 ?

                    <></>

                    :

                    <ul className="pagination justify-content-end">
                        <li className={`page-item ${current_page === 1 && "disabled"}`}>
                            <span style={{ cursor: "pointer" }} onClick={previousClick}
                                className="page-link">
                                Previous
                            </span>
                        </li>
                        {
                            total !== 0 && (
                                Array(last_page).fill(0).map((el, index) => {
                                    return (

                                        current_page === index + 1 ?

                                            <li key={index} className="page-item active" aria-current="page">
                                                <span className="page-link">{index + 1}</span>
                                            </li>

                                            :

                                            <li key={index} className="page-item"><span className="page-link" style={{ cursor: "pointer" }} onClick={() => getNumberIndex(index + 1)}>{index + 1}</span></li>
                                    )
                                })
                            )
                        }
                        <li className={`page-item ${current_page === last_page && "disabled"}`}>
                            <span style={{ cursor: "pointer" }} onClick={nextClick}
                                className="page-link" >
                                Next
                            </span>
                        </li>
                    </ul>

            }

        </nav>
    )
}

export default Pagination