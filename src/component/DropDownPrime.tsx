import React from 'react'
import { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { useSelector } from 'react-redux';

const DropDownPrime = () => {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

  // const { books } = useSelector((state) => state.books);
    const { authors } = useSelector((state) => state.authors);
    return (


        <div className="card flex justify-content-center">
            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                placeholder="Select a City" className="w-full md:w-14rem" />
        </div>
    )
}

export default DropDownPrime