import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ImageComponent = () => {
	// useState에 제네릭을 사용하여 배열이 문자열을 포함하도록 명시
	const [images, setImages] = useState<string[]>([]);
	const [currentImage, setCurrentImage] = useState('');
	const [isOpen, setIsOpen] = useState(false);

	// 이미지 URL을 배열로 저장
	const imageArray = [
		'image1.jpg',
		'image2.jpg',
		'image3.jpg',
		'image4.jpg',
		'image5.jpg',
	];

	// 이미지를 랜덤으로 바꾸는 함수
	const changeImage = () => {
		const randomIndex = Math.floor(Math.random() * imageArray.length);
		setCurrentImage(imageArray[randomIndex]);
	};

	// 이미지 클릭 시 동작하는 함수
	const handleImageClick = () => {
		setIsOpen(true);
		setTimeout(() => {
			setIsOpen(false);
		}, 1000);
	};

	useEffect(() => {
		setImages(imageArray);
		const intervalId = setInterval(changeImage, 1000);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<div>
			{/* img 요소를 button 요소로 감쌈 */}
			<button type="button" onClick={handleImageClick}>
				<img src={currentImage} alt="random" />
			</button>
			<Modal
				open={isOpen}
				onClose={() => setIsOpen(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						width: 400,
						bgcolor: 'background.paper',
						border: '2px solid #000',
						boxShadow: 24,
						p: 4,
					}}
				>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Image Paused
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						The image has been paused. It will resume in 1 second.
					</Typography>
				</Box>
			</Modal>
		</div>
	);
};

export default ImageComponent;
