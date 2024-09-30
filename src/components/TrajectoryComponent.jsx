import React from 'react';

const TrajectoryComponent = ({ 
  profile, 
  imageSize = 'w-24 h-24', 
  border = 'border-white-300', 
  bgColor = 'bg-white', 
  padding = 'p-4', 
  shadow = 'shadow-md', 
  borderRadius = 'rounded-full',
  additionalClasses = '' 
}) => {
  return (
    <div className={`flex flex-row items-center justify-center ${border} ${padding} ${shadow} gap-8`}>
      <img 
        src={profile.image} 
        alt={profile.name} 
        className={`${imageSize} ${bgColor} ${borderRadius} ${additionalClasses}`} 
      />
      <div className='pl-4 w-[50vh] flex text-left flex-col'>
        <p>{profile.name}</p>
        <p>{profile.position}</p>
      </div>
    </div>
  );
};

export default TrajectoryComponent;
