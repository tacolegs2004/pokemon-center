import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Index = ({ pokemon }: { pokemon: { results: Array<any> } }) => {
	const router = useRouter();

	const { id } = router.query;
	// const ids = pokemon.results.map(
	// 	(poke: { poke: any; ids: number }) => poke?.ids.toString() === id
	// );

	// {
	// 	ids.map((pokeman: any) => {
	// 		return <h1>{pokeman.name}</h1>;
	// 	});
	// }
	return <h1>Post: {id}</h1>;
};
export const getStaticProps: GetStaticProps = async (ctx) => {
	const res = await fetch(`https://pokeapi.co/api/v2/${ctx.params?.id}`);
	const pokemon = await res.json();

	return {
		props: { pokemon: {} },
	};
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	const res = await fetch("https://pokeapi.co/api/v2/pokemon");
	const pokemon = await res.json();

	return {
		paths: [{ params: { id: pokemon?.id?.toString() } }],
		fallback: false, // can also be true or 'blocking'
	};
};

export default Index;
