import React, { useState } from 'react';
import axios from 'axios';
import Input from '../Input';
import { City } from '@/types/Cities';

const CitySeacrh: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [cities, setCities] = useState<City[]>([]);

  const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    try {
      const response = await axios.get<City[]>(`https://origination-api-692b721ce1ef.herokuapp.com/cities/search?name=${value}`);
      setCities(response.data);
    } catch (error) {
      console.error('Error searching cities:', error);
    }
  };

  return (
    <div>
      <Input
        label="Cidade"
        type="text"
        list="cities-list"
        id="city-input"
        value={inputValue}
        onChange={handleInputChange}
      />
      <datalist id="cities-list">
        {cities.map(city => (
          <option
            key={city.id}
            value={`${city.name} - ${city.state_id}`}
          />
        ))}
      </datalist>
    </div>
  );
};

export default CitySeacrh;
