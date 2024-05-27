import React, { useState } from 'react';
import axios from 'axios';
import Input from '../Input';
import { City } from '@/types/Cities';
import { BASE_URL } from '@/utils/config';
import { StateTransformAcronym } from '@/utils/stateTransform';

interface CitySeacrchProps {
  onSelectCity: (city: City) => void;
}

const CitySeacrh: React.FC<CitySeacrchProps> = ({ onSelectCity }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [cities, setCities] = useState<City[]>([]);

  const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    try {
      const response = await axios.get<City[]>(`${BASE_URL}/cities/search?name=${value}`);
      setCities(response.data);
    } catch (error) {
      console.error('Error searching cities:', error);
    }
  };

  const handleCitySelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const selectedOption = cities.find(city => `${city.name} - ${StateTransformAcronym(city.state_id)}` === value);

    if (selectedOption) {
      onSelectCity(selectedOption)
    }
  }



  return (
    <div>
      <Input
        label="Cidade"
        type="text"
        list="cities-list"
        id="city-input"
        value={inputValue}
        onChange={handleInputChange}
        onInput={handleCitySelect}
      />
      <datalist id="cities-list">
        {cities.map(city => (
          <option
            key={city.id}
            value={`${city.name} - ${StateTransformAcronym(city.state_id)}`}
          />
        ))}
      </datalist>
    </div>
  );
};

export default CitySeacrh;
