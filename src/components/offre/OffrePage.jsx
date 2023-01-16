/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import offres from '../../datas/logements.json';
import Collapse from '../Template/Collapse';
import Gallery from '../Template/Gallery';
import Rating from './Rating';

const OffrePage = () => {

    const { id } = useParams()
    const offre = offres.find(offre => offre.id === id)
    if (offre === undefined) { 
        return <section className="error_page">
            <p className="error_page_subtitle">Malheureusement, le logement que vous recherchez n'est plus disponible ou n'existe pas.</p>
            <NavLink title='Accueil' end to='/home' className="error_page_link">Retourner sur la page d'accueil</NavLink> 
        </section>
    }

    return (
        <section key={offre.id} className='offre_page'>
            <Gallery 
                img={offre.pictures} 
            />
            <header className='offre_page_header'>
                <article className='offre_page_header_infos'>
                    <h1 className='offre_page_header_infos_title'>{offre.title}</h1>
                    <h2 className='offre_page_header_infos_subtitle'>{offre.location}</h2>
                    <div className='offre_page_header_infos_tags'>
                        {offre.tags.map((tag, i) => (
                            <p key={i} className='offre_page_header_infos_tags_tag'>{tag}</p>
                        ))}
                    </div>
                </article>
            
                <article className='offre_page_header_hoster'>
                    <div className='offre_page_header_hoster_infos'>
                        <p className='offre_page_header_hoster_infos_name'>{offre.host.name}</p>
                        <img src={offre.host.picture} alt='host-cover' className='offre_page_header_hoster_infos_img'/>
                    </div>
                    <Rating
                        scaleValue={offre.rating}
                    />
                </article>
            </header>

            <article className='offre_page_collapses'>
                <div className='offre_page_collapses_content'>
                    <Collapse
                        title='Description'
                        content={offre.description}
                    />
                </div>
                <div className='offre_page_collapses_content'>
                    <Collapse
                        title='Équipements'
                        content={offre.equipments.map((equipment, i) => (
                            <ul key={i}>
                                <li>• {equipment}</li>
                            </ul>
                        ))}
                    />
                </div>
            </article>
        </section>
    )
}

export default OffrePage;