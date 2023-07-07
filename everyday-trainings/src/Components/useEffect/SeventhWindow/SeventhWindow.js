import React, {useEffect, useState} from 'react';

const SeventhWindow = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.addEventListener('resize', handleResize)
        }
    },[])

    return (
        <div>
            {`Ширина окна - ${width}, высота окна - ${height}`}
        </div>
    );
};

export default SeventhWindow;