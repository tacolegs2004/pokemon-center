import Link from "next/link";
import React from "react";

type Props = {
	children: JSX.Element | JSX.Element[];
};

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Link href="/">home</Link>
			<main>{children}</main>
		</>
	);
};

export default Layout;
