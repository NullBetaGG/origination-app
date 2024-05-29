import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Input from '../Input';
import { City } from '@/types/Cities';
import { BASE_URL } from '@/utils/config';
import { StateTransformAcronym } from '@/utils/stateTransform';

interface CitySearchProps {
  onSelectCity: (city: City) => void;
}

const CitySearch: React.FC<CitySearchProps> = ({ onSelectCity }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [cities, setCities] = useState<City[]>([]);
  const [filteredCities, setFilteredCities] = useState<City[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  useEffect(() => {
    if (inputValue.length >= 2) {
      const fetchCities = async () => {
        try {
          const response = await axios.get<City[]>(`${BASE_URL}/cities/search?name=${inputValue}`);
          setCities(response.data);
          setFilteredCities(response.data);
          setShowSuggestions(true);
        } catch (error) {
          console.error('Error searching cities:', error);
        }
      };

      fetchCities();
    } else {
      setFilteredCities([]);
      setShowSuggestions(false);
    }
  }, [inputValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleCitySelect = (city: City) => {
    setInputValue(`${city.name} - ${StateTransformAcronym(city.state_id)}`);
    setShowSuggestions(false);
    onSelectCity(city);
  };

  return (
    <div className="relative">
      <Input
        label="Cidade"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        autoComplete="off"
      />
      {showSuggestions && filteredCities.length > 0 && (
        <ul className="absolute z-10 text-neutral-300 bg-neutral-800 rounded-xl w-full scrollbar mt-1 max-h-60 overflow-y-auto">
          {filteredCities.map(city => (
            <li
              key={city.id}
              className="px-4 py-2 cursor-pointer text-[1rem] hover:bg-neutral-200"
              onClick={() => handleCitySelect(city)}
            >
              {`${city.name} - ${StateTransformAcronym(city.state_id)}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CitySearch;
