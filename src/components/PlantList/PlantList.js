import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import './PlantList.css'


function PlantList() {
    const dispatch = useDispatch();

    const reduxState = useSelector(store => store);

    const plantList = useSelector(store => store.plantList)

    useEffect(() => {
        console.log('component did mount');
        // dispatch an action to request the plantList from the API
        dispatch({ type: 'FETCH_PLANT_LIST' });
    }, []); 

    const deletePlant = (event) => {
        dispatch({ type: 'DELETE_PLANT', payload: event.target });
    }

    return (
        <div>
            <h3>Plant List</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Kingdom</th>
                        <th>Clade</th>
                        <th>Order</th>
                        <th>Family</th>
                        <th>Subfamily</th>
                        <th>Genus</th>
                        <th>Delete</th>
                    </tr>
                </thead> 

                <tbody>
                    {plantList.map(plant => (
                    <tr key={plant.id}>    
                        <td>{plant.name}</td>
                        <td>{plant.kingdom}</td>
                        <td>{plant.clade}</td>
                        <td>{plant.order}</td>
                        <td>{plant.family}</td>
                        <td>{plant.subfamily}</td>
                        <td>{plant.genus}</td>
                        <td><button onClick={ (event) => deletePlant(event) }>Delete</button></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PlantList;
