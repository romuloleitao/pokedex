import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';

export async function getStaticProps() {
    const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
        .then((serverResponse) => {
            if (serverResponse.ok) {
                return serverResponse.json();
            }

            throw new Error('It didnt work.');
        })
        .then((responseAsObject) => responseAsObject.pokemon_entries)

    return {
        props: {
            pokemons,
        },
    };
}

export default function Home(props) {
    const { pokemons } = props;

    return (       
            <Layout>
                <h1>Pokédex - React with NextJs</h1>
                <ul>
                    {pokemons.map((pokemon) => (
                        <li key={pokemon.entry_number}>
                            <Link href={`/pokemon/${pokemon.entry_number}`}>
                                <a>
                                    {pokemon.pokemon_species.name}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </Layout>
    );
}