import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";


const Star = ({stars, reviews}) => {

    const ratingStar = Array.from({ length: 5 }, (element, index) => {

        let number = index + 0.5;
console.log(stars)
        return (<span key={index}>

            {
                stars >= index + 1 ?( <FaStar />)
                : stars >=number ? (<FaStarHalfAlt />)
                : (<AiOutlineStar />)
            }
        </span>)
    })

    return (
        // <div>Star</div>
        <div>
           RATING: {ratingStar}        ({reviews} customer reviews)
        </div>
    )
}

export default Star