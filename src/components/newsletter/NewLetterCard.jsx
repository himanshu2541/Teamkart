import React from 'react'
import './newsletter.css'
import {Link} from "react-router-dom";

const NewLetterCard = ({data}) => {
    return (
        <>
            <div className={'newsletter-card-container'}>
                <div className={'newsletter-text'}>
                    <div className={'newsletter-img'}>
                        <img src={data.publicImg} alt={'card image'}/>
                    </div>
                    <h3 className={'newsletter-title'}>
                        {data.title}
                    </h3>
                    <p>
                        {data.desc}
                    </p>
                </div>
                <div className={'newsletter-read-more-btn'}>
                    <Link to={data.srcLink} target={'_blank'}>Read More...</Link>
                </div>
            </div>
        </>
    )
}
export default NewLetterCard
