import SearchForm from "@/components/SearchForm";

function Home({ searchParams }: { searchParams: { query?: string } }) {
	return (
		<>
			<section className="pink_container">
				<h1 className="heading">
					Pitch your startup Submit your startup to be featured on Directory
				</h1>
				<p className="sub-heading !max-w-3xl">
					Submit Ideas, Vote on Pitches, and Discover the best ideas
				</p>
				<SearchForm query={searchParams.query} />
			</section>
		</>
	);
}

export default Home;
