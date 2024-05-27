import React, { useState } from 'react';
import Input from '../Input';
import { productsList } from '@/utils/productsList';

interface ProductSearchProps {
  onSelectProduct: (product: string) => void;
}

const ProductSearch: React.FC<ProductSearchProps> = ({ onSelectProduct }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [products, setProducts] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    const filteredProducts = productsList.filter(product =>
      product.toLowerCase().includes(value.toLowerCase())
    );

    setProducts(filteredProducts);

    onSelectProduct(value);
  };

  return (
    <div>
      <Input
        label="Produto"
        type="text"
        list="products-list"
        id="product-input"
        value={inputValue}
        onChange={handleInputChange}
      />
      <datalist id="products-list">
        {products.map((product, index) => (
          <option
            key={index}
            value={product}
          />
        ))}
      </datalist>
    </div>
  );
};

export default ProductSearch;
