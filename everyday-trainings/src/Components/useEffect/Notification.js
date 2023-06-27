import React, {useEffect, useState} from 'react';

const Notification = () => {
    const [showNotification, setShowNotification] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowNotification(false)
        }, 5000)

        return () => {
            clearTimeout(timer)
        }
    }, [])

    return (
        <div>
            {showNotification &&
                <div>
                    А вот и уведомление!
                </div>}
        </div>
    );
};

export default Notification;