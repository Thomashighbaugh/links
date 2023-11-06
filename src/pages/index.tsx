import MetaHead from '../components/MetaHead';
import Header from '../components/Header';
import LinksList from '../components/LinksList';
import Footer from '../components/Footer';

export default function Home() {
	return (
		<>
			<MetaHead />

			<main className='w-full max-w-6xl  flex flex-col justify-center items-center mx-auto pt-6'>
				<Header />
				<LinksList />
				<Footer />
			</main>
		</>
	);
}
