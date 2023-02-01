import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import RemoveIcon from '@mui/icons-material/Remove';

type Props = {
	images: string[]
	width?: number,
	height?: number,
	indicator?: 'bar' | 'image'
}


/*
		<Grid item xs={12} sm={6}>
			<Carousel images={data.product.images} />
		</Grid>
*/
const Carousel = ({ images, width=300, height=200, indicator='bar' }: Props) => {
	const [ selectedIndex, setSelectedIndex ] = useState(0)
	const [ imageHeight, setImageHeight ] = useState(width/2)

	const lastIndex = images.length - 1
	const getActiveColor = (index: number) => selectedIndex === index ? '#fffc' : '#fff3'
	// const getActiveColor = (index: number) => selectedIndex === index ? '#494949' : '#afafaf'

	const prevIndicatorHandler = () => {
		if(selectedIndex <= 0 ) return setSelectedIndex(lastIndex)
		setSelectedIndex(index => index - 1)
	}
	const nextIndicatorHandler = () => {
		if(selectedIndex >= lastIndex ) return setSelectedIndex(0)
		setSelectedIndex(index => index + 1)
	}

	const resizeHandler = useCallback(() => {
		const box = document.getElementById('carousel')!
		const height = box.offsetHeight
		setImageHeight(height)
	}, [])

	useEffect(() => {
		resizeHandler()
	}, [resizeHandler])

	useEffect(() => {
		window.addEventListener('resize', resizeHandler)
		return () => window.removeEventListener('resize', resizeHandler)
	}, [resizeHandler])


	const indicatorStyle = { 
		color: 'white',
		backgroundColor: '#6e6c75aa',
		'&:hover' : {
			backgroundColor: '#6e6c75dd',
		}
	}


	return (
		<Box id='carousel' sx={{ position: 'relative' }}>
			{!!images[selectedIndex] && <Box sx={{ 
				position: 'relative', 

				minWidth: { xs: 300, md: 500 },
				width: '100%', 
				height: { xs: 150, md: 250 },
			}}>
				<Image 
					src={images[selectedIndex]}
					alt={images[selectedIndex]}
					fill
					// width={720}
					// height={250}
				/>
			</Box>
			}
			<Box sx={{
				position: 'absolute',
				zIndex: 1,
				top: imageHeight/2 - 16*1.5, 		// height/2 + buttonHeight/1.5
				left: 0,
				width: '100%',
				display: 'flex',
				justifyContent: 'space-between',
				px: 1,
				boxSizing: 'border-box',
			}}>
				<IconButton sx={indicatorStyle} onClick={prevIndicatorHandler}>
					<KeyboardArrowLeftIcon />
				</IconButton>

				<IconButton sx={indicatorStyle} onClick={nextIndicatorHandler}>
					<KeyboardArrowRightIcon />
				</IconButton>
			</Box>
			<Box sx={{
				position: 'absolute',
				bottom: 8,
				left: 0,
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				gap: .1,
			}}>

				{/* ----- Method-1: indicator as bar ----- */}
				{ indicator == 'bar' && images.map( (_, index) => (
						<RemoveIcon key={index} fontSize='large' sx={{ 
							color: getActiveColor(index),
							cursor: 'pointer',
							overflow: 'hidden',
							// px: 1,
						}} 
						onClick={() => setSelectedIndex(index)}
					/>
				))}

				{/* ----- Method-2: indicator as image ----- */}
				{ indicator === 'image' && images.map( (image, index) => (
					<Box key={index} sx={{ border: `1px solid ${getActiveColor(index)}`, cursor: 'pointer' }} >
						{!!image &&
						<Image
							src={image}
							alt='image'
							width={width/2/2} 				
							// height={width/2/2/2} 			
							height={height} 			
							onClick={() => setSelectedIndex(index)}
						/>
						}
					</Box>
				))}
			</Box>
		</Box>
	)
}
export default Carousel