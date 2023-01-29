import Layout from '@/layout'
import { useRouter } from 'next/router'

const Project = () => {

	const router = useRouter()

	return (
		<>
			<Layout>
				<p>Projects: {router.query.slug} </p>
			</Layout>
		</>
	)
}
export default Project
