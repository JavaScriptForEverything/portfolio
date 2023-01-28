import Link from 'next/link'

import Typography from '@mui/material/Typography'

const Contact = () => {

	return (
		<>
			<Typography fontSize='small' paragraph>
				Anyone can contact up with given email or any <em>social media</em> links
			</Typography>

			<Typography fontSize='small'>
				<Link href='mailto:javascriptforeverything@gmail.com' passHref style={{
					color: 'dodgerblue',
					textDecoration: 'none',
				}}>
					Email: JavaScriptForEverything@gmail.com
				</Link>
			</Typography>
		</>
	)
}
export default Contact