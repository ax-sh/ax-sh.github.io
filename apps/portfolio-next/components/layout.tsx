// import Navbar from './navbar';
// import Footer from './footer';

import clsx from 'clsx';
import React from 'react';

type LayoutProps = React.ComponentPropsWithoutRef<'main'>;

export default function Layout({ children, className, ...props }: LayoutProps) {
	return (
		<>
			{/* <Navbar /> */}
			<main className={clsx('main', className)} {...props}>
				{children}
			</main>
			{/* <Footer /> */}
		</>
	);
}
