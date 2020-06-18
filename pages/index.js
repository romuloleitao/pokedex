import React from 'react';
import Link from 'next/link';

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
        <div>
            Pokédex - React with NextJs
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About the project</a>
                    </Link>
                </li>
            </ul>

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
        </div>
    );
}