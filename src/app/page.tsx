'use client'
import Button from "@/components/Button";
import CitySearch from "@/components/CitySearch";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Loading from "@/components/Loading";
import ProductSearch from "@/components/ProductSearch";
import Selector from "@/components/Selector";
import Success from "@/components/Success";
import { useEnvironment } from "@/context/Environment";
import { City } from "@/types/Cities";
import { BASE_URL } from "@/utils/config";
import { StateTransformAcronym, StateTransformName } from "@/utils/stateTransform";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const { environment } = useEnvironment();
  const [loading, setLoading] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedModel, setSelectedModel] = useState<'oferta' | 'demanda' | string>("oferta");
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [user, setUser] = useState<string | null>(null);
  const [volume, setVolume] = useState<number | null>(null);
  const [price, setPrice] = useState<number | null>(null);
  const [supplier, setSupplier] = useState<string | null>(null);
  const models: string[] = ['oferta', 'demanda'];
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    if (!user || !volume || !selectedProduct || !price || !selectedCity?.name) {
      toast.error('Preencha todos os campos!');
      return
    }
    setOpen(true);
  }

  const handleClose = () => setOpen(false);

  const handleProductSelect = (product: string) => {
    setSelectedProduct(product);
  };

  const handleCitySelect = (city: any) => {
    setSelectedCity(city);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async () => {
    setOpen(false);
    const payload = {
      user: user,
      volume: volume,
      unit: 'ton',
      price: price,
      product: selectedProduct,
      city: selectedCity?.name,
      state: selectedCity ? StateTransformName(selectedCity?.state_id) : "",
      supplier: selectedModel === 'oferta' ? supplier : "",
      type: selectedModel,
      ibge_code: selectedCity?.ibge_code,
      new_price: ""
    }

    try {
      const response = await axios.post(`${BASE_URL}/new-orders`, payload);
      toast.success('Ordem salva com sucesso!');
      setShowSuccess(true);

      setTimeout(() => {
        window.location.reload();
      }, 1200);
    } catch (err: any) {
      if (err) {
        if (err.response.data.message) {
          const messages = err.response.data.message;
          if (Array.isArray(messages)) {
            messages.forEach(message => toast.warn(message));
          } else {
            console.log(err.response.data.message)
            toast.warn(messages);
          }
        } else {
          toast.error('Ocorreu um erro ao salvar a ordem.');
        }
      } else {
        console.error('Erro desconhecido:', err);
        toast.error('Ocorreu um erro desconhecido.');
      }
    }
  };

  if (showSuccess) return <Success />;
  if (loading) return <Loading />;

  return (
    <>
      <Header />
      <div className="flex flex-col">
        {
          environment === "DEV" ?
            <div className="w-full items-center flex justify-center bg-support-error py-3">
              <p className="text-neutral-300 font-bold text-2xl">DEVELOP</p>
            </div>
            :
            <></>
        }
        <main className={`flex flex-col items-center ${environment === "DEV" ? 'mt-[-42px]' : ''}  justify-center py-16 px-8`} style={{ minHeight: 'calc(100vh - 120px)' }}>
          <div className="w-[90vw] h-[70vh] rounded-base max-w-[420px] flex flex-col items-center justify-start">
            <div className="flex justify-around w-[90%] h-[45px] mb-4">
              {models.map((e, i) => {
                return (
                  <Selector
                    key={e}
                    text={e}
                    isSelected={selectedModel === e}
                    onClick={() => {
                      setSelectedModel(e);
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
                  onChange={(e) => {
                    setUser(e.target.value);
                  }}
                />
              </div>
              <div className="w-[80%] mb-4 flex justify-between">
                <div className="flex flex-col w-[100%] justify-center">
                  <ProductSearch onSelectProduct={handleProductSelect} />
                </div>
              </div>
              <div className="w-[80%] mb-4 flex justify-between">
                <div className="w-[100%] flex flex-col justify-center">
                  <Input
                    type="number"
                    label="Volume (ton)"
                    onChange={(e) => {
                      if (e.target.value) {
                        const value = Number(e.target.value);
                        setVolume(value);
                      }
                    }}
                  />
                </div>
              </div>
              <div className="w-[80%] mb-4 flex flex-col justify-center">
                <Input
                  type="number"
                  label="Preço"
                  onChange={(e) => {
                    if (e.target.value) {
                      const value = Number(e.target.value);
                      setPrice(value);
                    }
                  }}
                />
              </div>
              <div className="w-[80%] mb-4 flex flex-col justify-center">
                <CitySearch onSelectCity={handleCitySelect} />
              </div>
              {
                selectedModel === 'demanda' ? <></> : (
                  <div className="w-[80%] mb-4 flex flex-col justify-center">
                    <Input
                      label="Fornecedor"
                      onChange={(e) => {
                        setSupplier(e.target.value);
                      }}
                    />
                  </div>
                )
              }
            </div>
            <Button
              title={`Criar ${selectedModel}`}
              containerStyle="mt-10 w-[80%]"
              onClick={() => {
                handleClickOpen();
              }}
            />
            <div>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title" className="text-neutral-300">{`Deseja criar a ${selectedModel}?`}</DialogTitle>
                <DialogContent>
                  <DialogContentText
                    id="alert-dialog-description"
                  >
                    <div className="text-neutral-300 flex flex-col gap-1">
                      <div className="flex justify-between">
                        <p className="font-bold text-[14px]">Nome:</p><p>{user}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="font-bold text-[14px]">Produto:</p><p className="ml-2">{selectedProduct}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="font-bold text-[14px]">Volume:</p><p>{volume} /ton</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="font-bold text-[14px]">Preço:</p><p>R$ {price} /ton</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="font-bold text-[14px]">Cidade:</p><p>{selectedCity?.name}/{selectedCity ? StateTransformAcronym(selectedCity?.state_id) : ""}</p>
                      </div>
                      {
                        selectedModel === "oferta" ?
                          <div className="flex justify-between">
                            <p className="font-bold text-[14px]">Fornecedor:</p><p className="ml-2">{supplier}</p>
                          </div>
                          :
                          <></>
                      }
                    </div>
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    containerStyle='h-[35px] border-support-error text-support-error hover:text-support-error hover:border-support-error'
                    onClick={handleClose}>
                    Não
                  </Button>
                  <Button
                    containerStyle='h-[35px] border-support-info text-support-info hover:text-support-info hover:border-support-info'
                    onClick={handleSubmit}
                    autoFocus>
                    Sim
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
        </main >
      </div >
      <Footer />
    </>
  );
}