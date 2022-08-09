/** index.tsx */

// import React, { useEffect } from "react";
import PokeList from "../components/PokeList";

const index = ({ pokemon }: any) => {
	// console.log(props.pokemon);

	return (
		<>
			<PokeList pokemon={pokemon} />
		</>
	);
};

export const getStaticProps = async () => {
	const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
	const pokemon = await res.json();

	return {
		props: { pokemon },
	};
};

export default index;
