import Image from "next/image";
import Link from "next/link";

const PokeList = ({ pokemon }: { pokemon: { results: Array<any> } }) => {
	// console.log(pokemon);

	return (
		<>
			{pokemon.results.map((pokeman: any, index: number) => {
				return (
					<Link className="" href={`/pokemon?id=${index}`}>
						<a>
							{/* <Image
									src={pokeman.sprites.front_default}
									alt={pokeman.name}
									layout="fill"
									className=" mr-3"
								/> */}
							<span className="mr-2 font-bold flex flex-row">
								{index + 1}. {pokeman.name}
							</span>
						</a>
					</Link>
				);
			})}
		</>
	);
};

export default PokeList;
