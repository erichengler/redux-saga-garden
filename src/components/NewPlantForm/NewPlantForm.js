import React, {useState}from 'react';
import { useDispatch } from 'react-redux';

const NewPlantForm = () => {
    const dispatch = useDispatch();
    
    //Initial state is an OBJECT, with keys id and name
    let [newPlant, setPlant] = useState({
        id: 4, name: '', kingdom:'', clade:'', order:'',
        family:'', subfamily:'', genus:''
    });

    const handleNameChange = (event) => {
        console.log('event happened');
        setPlant({...newPlant, name: event.target.value})
    }

    const handleKingdomChange = (event) => {
        console.log('event happened');
        setPlant({...newPlant, kingdom: event.target.value})
    }

    const handleCladeChange = (event) => {
        console.log('event happened');
        setPlant({...newPlant, clade: event.target.value})
    }

    const handleOrderChange = (event) => {
        console.log('event happened');
        setPlant({...newPlant, order: event.target.value})
    }

    const handleFamilyChange = (event) => {
        console.log('event happened');
        setPlant({...newPlant, family: event.target.value})
    }

    const handleSubfamilyChange = (event) => {
        console.log('event happened');
        setPlant({...newPlant, subfamily: event.target.value})
    }

    const handleGenusChange = (event) => {
        console.log('event happened');
        setPlant({...newPlant, genus: event.target.value})
    }

    const addNewPlant = event => {
        event.preventDefault();
        dispatch({ type: 'ADD_PLANT', payload: newPlant });
        //updates the next plant to have a new id
        setPlant({id:newPlant.id + 1, name: '', kingdom:'', 
        clade:'', order:'', family:'', subfamily:'', genus:'',
        setPlant: setPlant
    });
       
    }

    return (
        <div>
            <h3>Form</h3>
            <form onSubmit={addNewPlant}>
                Name:
                <input type='text' value={newPlant.name} onChange={handleNameChange} />
                <br />
                Kingdom:
                <input type='text' value={newPlant.kingdom} onChange={handleKingdomChange} />
                <br />
                Clade:
                <input type='text' value={newPlant.clade} onChange={handleCladeChange} />
                <br />
                Order:
                <input type='text' value={newPlant.order} onChange={handleOrderChange} />
                <br />
                Family:
                <input type='text' value={newPlant.family} onChange={handleFamilyChange} />
                <br />
                Subfamily:
                <input type='text' value={newPlant.subfamily} onChange={handleSubfamilyChange} />
                <br />
                Genus:
                <input type='text' value={newPlant.genus} onChange={handleGenusChange} />
                <br />
                <input type='submit' value='Add New Plant' />
            </form>
        </div>
    );
}


export default NewPlantForm;
