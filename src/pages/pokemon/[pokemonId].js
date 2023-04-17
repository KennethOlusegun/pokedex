export const getStaticPaths = async () => {
  const maxPokemons = 151
  const api = `https://pokeapi.co/api/v2/pokemon/`

  const res = await fetch(`${api}/?limit=${maxPokemons}`)

  const data = await res.json()

  // params
	const path = data.results.map((pokemon, i) => {
		return {
		params: { pokemonId: (i + 1).toString()},
	}
	})

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps = async (context) => {

	const id = context.params.pokemonId

	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

	const data = await res.json()

	return {
		props: { pokemon: data }
	}
}

export default function Pokemon({ pokemon }) {
  return <p>{pokemon.name}</p>
}
