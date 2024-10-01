import React from 'react';

const TrajectoryComponent = ({ 
  profile, 
  imageSize = 'w-24', 
  border = 'border-white-300', 
  bgColor = 'bg-white', 
  padding = 'p-5', 
  shadow = 'shadow-md', 
  borderRadius = 'rounded-full',
  additionalClasses = '' 
}) => {
  return (
    <div className={`rounded flex flex-row items-center justify-center border border-white ${padding} ${shadow} gap-5 w-[100%]`}>
      <img 
        src={profile.image} 
        alt={profile.name} 
        className={`${imageSize} ${bgColor} ${borderRadius} ${additionalClasses}`} 
      />
      <div className='pl-5 w-[50vh] flex text-left flex-col'>
        <p>{profile.name}</p>
        <p>{profile.position}</p>
      </div>
    </div>
  );
};

export default TrajectoryComponent;
