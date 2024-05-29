import React, { useEffect, useState } from 'react';
import Input from '../Input';
import { productsList } from '@/utils/productsList';

interface ProductSearchProps {
  onSelectProduct: (product: string) => void;
}

const ProductSearch: React.FC<ProductSearchProps> = ({ onSelectProduct }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  useEffect(() => {
    if (inputValue.length >= 2) {
      const filteredProducts = productsList.filter(product =>
        product.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredProducts(filteredProducts);
      setShowSuggestions(true);
    } else {
      setFilteredProducts([]);
      setShowSuggestions(false);
    }
  }, [inputValue])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleProductSelect = (product: string) => {
    setInputValue(product);
    setShowSuggestions(false);
    onSelectProduct(product);
  };

  return (
    <div className="relative">
      <Input
        label="Produto"
        type="text"
        list="products-list"
        id="product-input"
        value={inputValue}
        onChange={handleInputChange}
        autoComplete="off"
      />
      {showSuggestions && filteredProducts.length > 0 && (
        <ul className="absolute z-10 text-neutral-300 bg-neutral-800 rounded-xl w-full scrollbar mt-1 max-h-60 overflow-y-auto">
          {filteredProducts.map((product, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer text-[1rem] hover:bg-neutral-200"
              onClick={() => handleProductSelect(product)}
            >
              {product}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductSearch;
