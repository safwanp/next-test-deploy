"use client"

import Link from "next/link"
import styled from "styled-components"


const Home = () => {
	return (
		<Container className='flex items-center justify-center h-[100vh] w-full'>
			<h3 >Home Page</h3>
			<div className="container">
				<Link href="/business-support">Business Support</Link>
			</div>
		</Container>
	)
}

export default Home

const Container = styled.div`
	background-color: #cafffb;

	h3{
		color: #111;
	}
`