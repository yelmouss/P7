import React from 'react';
import housings from '../../datas/logements.json'
import Card from './Card'

const ShowCards = () => {
    return(
        <section className='housings_container'>
            <ul className='housings_list'>
                {housings.map(({ id, title, cover }) => (
                    <Card
                        key={id}
                        id={id}
                        title={title}
                        cover={cover}
                    />
                ))}
            </ul>
        </section>
    )
}

export default ShowCards;