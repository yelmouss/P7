import React from 'react';

const Card = ({ id, title, cover }) => {
    return(
        <li key={id} className='housing'>
            <a href={'/housing/' + id}>
                <figure className='housing_figure'>
                    <img src={cover} alt={title}  className='housing_figure_cover'/>
                    <figcaption className='housing_figure_figcaption'>
                        <h2 className='housing_figure_figcaption_title'>{title}</h2>
                    </figcaption>
                </figure>
            </a>
        </li>
    )
}

export default Card;