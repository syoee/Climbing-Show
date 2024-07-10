import React from 'react';

interface GymsProps {
	data: any[];
}

const Gyms: React.FC<GymsProps> = ({ data }) => {
	return (
		<div>
			{data && data.length > 0 && (
				<ul>
					{data.map((item) => (
						<li key={item.id} className="mb-4 p-4 border rounded-md">
							<img
								src={item.logoUrl}
								alt={`${item.name} 로고`}
								className="w-32 h-32 object-cover mb-2"
							/>
							<h2 className="text-xl font-bold">{item.name}</h2>
							<p>{item.addressRoad}</p>
							<p>{item.addressLot}</p>
							<p>Latitude: {item.latitude}</p>
							<p>Longitude: {item.longitude}</p>
							<div className="mt-2">
								<h3 className="font-semibold">Climbing Levels:</h3>
								<ul>
									{item.climbingLevelList.map((level: any) => (
										<li key={level.id} style={{ color: level.color }}>
											Level {level.level}
										</li>
									))}
								</ul>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Gyms;
