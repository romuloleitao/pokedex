import React from 'react';

export default function Pokemon({ pokemon }) {
    return (
        <div>
            <img src={pokemon.sprites.front_default} alt="Pokemon image" />
        </div>
    );
}

export async function getStaticProps({ params }) {
    console.log(params);
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    .then((serverResponse) => {
        if (serverResponse.ok) {
            return serverResponse.json();
        }

        throw new Error('It didnt work.');
    })
    .then((responseAsObject) => responseAsObject)
    return {
        props: {
            pokemon
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    id: '1',
                },
            },
            {
                params: {
                    id: '2',
                },
            }
        ],
        fallback: false,
    };
}