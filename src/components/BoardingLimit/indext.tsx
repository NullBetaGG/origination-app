import React, { useState } from 'react';
import Input from '../Input';
import MonthList from '@/utils/monthList';

interface BoardingSearchProps {
  onSelectBoarding: (boarding: string) => void;
}

const BoardingSearch: React.FC<BoardingSearchProps> = ({ onSelectBoarding }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const date = new Date();
  const monthList = MonthList(date);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    if (value === '') {
      setShowSuggestions(true);
    }
  };

  const handleInputFocus = () => {
    setShowSuggestions(true);
  };

  const handleBoardingSelect = (boarding: string) => {
    setInputValue(boarding);
    setShowSuggestions(false);
    onSelectBoarding(boarding);
  };

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 100);
  };

  return (
    <div className="relative" onBlur={handleBlur}>
      <Input
        label="Limite de Embarque"
        type="text"
        list="boardings-list"
        id="boarding-input"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        autoComplete="off"
      />
      {showSuggestions && (
        <ul className="absolute z-10 text-neutral-300 bg-neutral-800 rounded-xl w-full scrollbar mt-1 max-h-60 overflow-y-auto">
          {monthList.map((boarding, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer text-[1rem] hover:bg-neutral-200"
              onClick={() => handleBoardingSelect(boarding)}
            >
              {boarding}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BoardingSearch;
