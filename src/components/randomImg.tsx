import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ImageComponent = () => {
	const [images, setImages] = useState<string[]>([]);
	const [currentImage, setCurrentImage] = useState('');
	const [isOpen, setIsOpen] = useState(false);
	const [isPaused, setIsPaused] = useState(false);

	const imageArray = [
		'https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FC417FCFD0F6042C69022D17BBE467FCE',
		'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240611_133%2F1718061147813YWzU2_PNG%2F%25B9%25AE%25B7%25A1_%25C0%25CC%25B9%25CC%25C1%25F6.png',
		'https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FA9924AE02FFE4F1489AC8D6E406B515F',
		'https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F94C92D9DDD0C413B971CC7A0765F7614',
		'https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F64DF75A758C2485C94EE21090C4288C3',
	];

	const changeImage = () => {
		if (!isPaused) {
			const randomIndex = Math.floor(Math.random() * imageArray.length);
			setCurrentImage(imageArray[randomIndex]);
		}
	};

	const handleImageClick = () => {
		setIsPaused(!isPaused);
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
		<div className="flex flex-col items-center">
			<div className="pb-10 text-5xl font-extrabold text-blue-700">
				{' '}
				오늘은 여기로 정했다!
			</div>
			<button type="button" className="w-1/4 h-1/4" onClick={handleImageClick}>
				<img className="w-full h-full" src={currentImage} alt="랜덤이미지" />
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
						다음 클라이밍장 추천입니다!
					</Typography>
				</Box>
			</Modal>
		</div>
	);
};

export default ImageComponent;
