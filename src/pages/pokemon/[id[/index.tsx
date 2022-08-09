import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";

const Index = ({ pokemon }: any) => {
	return <h1>{pokemon.name}</h1>;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const res = await fetch(`https://pokeapi.co/api/v2/${ctx.params?.id}`);
	const pokemon = await res.json();

	return {
		props: { pokemon },
	};
};

export const getStaticPaths = async () => {
	const res = await fetch("https://pokeapi.co/api/v2/pokemon");
	const pokemon = await res.json();

	const ids = pokemon.map((poke: { poke: any; ids: number }) => poke?.ids);
	const paths = ids.map((id: { id: number }) => ({
		params: { id: id.toString() },
	}));

	return { paths, fallback: false };
};
export default Index;
