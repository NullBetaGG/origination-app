'use client'
import Button from "@/components/Button";
import Input from "@/components/Input";
import Selector from "@/components/Selector";
import { AutoComplete } from "antd";
import { useState } from "react";

export default function Home() {
  const [selectedModel, setSelectedModel] = useState<string>("oferta");
  const [selectedUnity, setSelectedUnity] = useState<string>("ton");
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const models: string[] = ['oferta', 'demanda'];
  const unity: string[] = ['ton', 'sc'];

  const handleProductSelect = (value: string) => {
    setSelectedProduct(value);
  };

  const onChangeModel = (model: string) => {
    setSelectedModel(model);
  }

  const onChangeUnity = (model: string) => {
    setSelectedUnity(model);
  }


  const productOptions = ["Milho", "Farelo de Soja", "Soja Grão", "Algodão", "DDGS"];

  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-center py-16 px-8">
      <div className="w-[90vw] h-[70vh] rounded-base max-w-[420px] flex flex-col items-center justify-start">
        <div className="flex justify-around w-[90%] h-[45px] mb-4">
          {models.map((e, i) => {
            return (
              <Selector
                key={e}
                text={e}
                isSelected={selectedModel === e}
                onClick={() => {
                  onChangeModel(e);
                }}
                containerStyle="w-[40%] text-xl uppercase"
              />
            )
          })}
        </div>
        <div className="flex flex-col items-center w-[100%]">
          <div className="w-[80%] mb-4 flex flex-col justify-center">
            <Input
              label="Usuário"
            />
          </div>
          <div className="w-[80%] mb-4 flex justify-between">
            <div className="flex flex-col w-[100%] justify-center">
              <AutoComplete
                className="w-[100%] h-[60px]"
                options={productOptions.map(product => ({ value: product }))}
                onSelect={handleProductSelect}
                filterOption={(inputValue, option) =>
                  option!.value.toLowerCase().includes(inputValue.toLowerCase())
                }
              >
                <Input
                  label="Produto"
                />
              </AutoComplete>
            </div>
          </div>
          <div className="w-[80%] mb-4 flex justify-between">
            <div className="w-[80%] flex flex-col justify-center">
              <Input
                type="number"
                label="Volume"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="gap-2 flex justify-center">
                {unity.map((e, i) => {
                  return (
                    <Selector
                      key={e}
                      text={e}
                      isSelected={selectedUnity === e}
                      onClick={() => {
                        onChangeUnity(e);
                      }}
                      containerStyle="w-[40%] text-xl"
                    />
                  )
                })}
              </div>
            </div>
          </div>
          <div className="w-[80%] mb-4 flex flex-col justify-center">
            <Input
              type="number"
              label="Preço"
            />
          </div>
          <div className="w-[80%] mb-4 flex flex-col justify-center">
            <Input
              label="Cidade"
            />
          </div>
          {
            selectedModel === 'demanda' ? <></> : (
              <div className="w-[80%] mb-4 flex flex-col justify-center">
                <Input
                  label="Fornecedor"
                />
              </div>
            )
          }
        </div>
        <Button
          title={`Criar ${selectedModel}`}
          containerStyle="mt-10 w-[80%]"
        />
      </div>
    </main>
  );
}
