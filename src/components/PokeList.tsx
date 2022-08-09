import Image from "next/image";
import Link from "next/link";

const PokeList = ({ pokemon }: { pokemon: { results: Array<any> } }) => {
	console.log(pokemon);

	return (
		<>
			{pokemon.results.map((pokeman: any, index: number) => {
				<div className="w-6/12 h-6/12" key={index}>
					<Link href={`/pokemon?id=${index + 1}`}>
						<a className="border p-4 border-grey my-2 hover:shadow-md capitalize flex items-center text-lg bg-gray-200 rounded-md">
							<Image
								src={pokeman.image}
								alt={pokeman.name}
								layout="fill"
								className=" mr-3"
							/>
							<span className="mr-2 font-bold">{index + 1}.</span>
							{pokeman.name}
						</a>
					</Link>
				</div>;
			})}
		</>
	);
};

export default PokeList;
