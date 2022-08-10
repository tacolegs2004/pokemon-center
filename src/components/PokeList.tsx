import Image from "next/image";
import Link from "next/link";

const PokeList = ({ pokemon }: { pokemon: { results: Array<any> } }) => {
	// console.log(pokemon);

	return (
		<>
			{pokemon.results.map((pokeman: any, index: number) => {
				return (
					<Link key={index} className="" href={`/pokemon/${index}`}>
						<a>
							{/* <Image
									src={pokeman.sprites.front_default}
									alt={pokeman.name}
									layout="fill"
									className=" mr-3"
								/> */}
							<ol>
								<li>
									{index + 1}. {pokeman.name}
								</li>
							</ol>
						</a>
					</Link>
				);
			})}
		</>
	);
};

export default PokeList;
