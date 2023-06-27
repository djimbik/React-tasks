import React, {useEffect, useState} from 'react';

const DataLoader = () => {
    const USERS = 'https://jsonplaceholder.typicode.com/users'

    const [list, setList] = useState([])

    useEffect(
        () => {
            const fetchData = fetch(USERS, {
                method: 'GET',
            })
            fetchData
                .then(response => {
                if (!response.ok) {
                    throw new Error('ну ептыть')
                }

                return response.json()
            })
                .then(fetchList => {
                    console.log('fetchList', fetchList)
                    const newFetchList = fetchList.map(item => ({name: item.name, id: item.id}));
                    console.log(newFetchList)
                    setList(newFetchList)
                })

        }, []
    )

    return (
        <ul>
            {list.map((item) => <li key={item.id}>{item.name}</li>)}
        </ul>
    );
};

export default DataLoader;