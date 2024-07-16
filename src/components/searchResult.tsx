import React from 'react';

interface Level {
	level: number;
	color: string;
}

interface SearchResultProps {
	searchResults: {
		name: string;
		addressRoad: string;
		addressLot: string;
		latitude: string;
		longitude: string;
		levelList: Level[];
		logoUrl: string;
	}[];
}

const SearchResult: React.FC<SearchResultProps> = ({ searchResults }) => {
	return (
		<div>
			{searchResults?.map((item) => (
				<div key={item.name} className="my-4 p-4 border rounded-md">
					<img src={item.logoUrl} alt={item.name} className="w-16 h-16 mr-4" />
					<div>
						<p className="font-bold">{item.name}</p>
						<p>{item.addressRoad}</p>
						<p>{item.addressLot}</p>
						<div className="flex">
							{item.levelList?.map((level) => (
								<div
									key={level.level}
									style={{ backgroundColor: level.color }}
									className="w-4 h-4 rounded-full mr-1"
								/>
							))}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default SearchResult;
