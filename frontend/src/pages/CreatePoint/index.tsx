import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Marker, Map, TileLayer } from 'react-leaflet';
import axios from 'axios';
import { LeafletMouseEvent } from 'leaflet';
import api from '../../services/api';

// Todo css foi definido atraves do styled-component
/* import './styles.css'; */

import {
  PageCreatePoint,
  Field,
  FieldGroup,
  Form,
  ItensGrid,
  LeafletContainer,
  Header,
} from './styles';

import logo from '../../assets/logo.svg';
import Dropzone from '../../components/Dropzone';

interface Data {
  name: string;
  email: string;
  whatsapp: string;
  uf: string;
  city: string;
  latitude: number;
  longitude: number;
  items: number[];
}

interface Item {
  id: number;
  title: string;
  image_url: string;
}
interface IBGEResponse {
  sigla: string;
}
interface IBGECityResponse {
  nome: string;
}

const CreatePoint: React.FC = () => {
  const [itens, setItens] = useState<Item[]>([]);
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [selectedFile, setSelectedFile] = useState<File>();

  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
  });

  const [selectedUf, setSeletectedUf] = useState<string>('0');
  const [selectedCity, setSeletectedCity] = useState<string>('0');
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
    0,
    0,
  ]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const history = useHistory();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setInitialPosition([latitude, longitude]);
      setSelectedPosition([latitude, longitude]);
    });
  }, []);

  useEffect(() => {
    api.get('items').then((res) => {
      setItens(res.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get<IBGEResponse[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome',
      )
      .then((res) => {
        const ufInitials = res.data.map((uf) => uf.sigla);
        setUfs(ufInitials);
      });
  }, []);

  useEffect(() => {
    if (selectedUf === '0') {
      return;
    }
    axios
      .get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`,
      )
      .then((res) => {
        const cityNames = res.data.map((city) => city.nome);

        setCities(cityNames);
      });
  }, [selectedUf]);

  function handleSelectedUf(event: ChangeEvent<HTMLSelectElement>): void {
    const uf = event.target.value;
    return setSeletectedUf(uf);
  }

  function handleSelectedCity(event: ChangeEvent<HTMLSelectElement>): void {
    const city = event.target.value;
    return setSeletectedCity(city);
  }

  function handleMapClick(event: LeafletMouseEvent): void {
    setSelectedPosition([event.latlng.lat, event.latlng.lng]);
  }
  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleSelectedItem(id: number): void {
    const alreadySelected = selectedItems.findIndex((item) => item === id);

    if (alreadySelected >= 0) {
      const fileterItems = selectedItems.filter((item) => item !== id);
      setSelectedItems(fileterItems);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  }

  async function handleSubmit(event: FormEvent): Promise<void> {
    event.preventDefault();

    const { name, email, whatsapp } = formData;
    const uf = selectedUf;
    const city = selectedCity;
    const [latitude, longitude] = selectedPosition;
    const selectedItens = selectedItems;

    const data = new FormData();

    data.append('name', name);
    data.append('email', email);
    data.append('whatsapp', whatsapp);
    data.append('uf', uf);
    data.append('city', city);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('items', selectedItens.join(','));

    if (selectedFile) {
      data.append('image', selectedFile);
    }

    await api.post('points', data);
    history.push('/create-point-success');
  }

  return (
    <PageCreatePoint id="page-create-point">
      <Header>
        <img src={logo} alt="" />

        <Link to="/dashboard">
          <FiArrowLeft />
          Voltar para Dashboard
        </Link>
      </Header>
      <Form onSubmit={handleSubmit}>
        <h1>Cadastro do ponto de coleta</h1>

        <Dropzone onFileUploaded={setSelectedFile} />

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>
          <Field className="field">
            <label htmlFor="name">Nome da entidade</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleInputChange}
            />
          </Field>

          <FieldGroup className="field-group">
            <Field className="field">
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                name="email"
                id="email"
                onChange={handleInputChange}
              />
            </Field>
            <Field className="field">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input
                type="text"
                name="whatsapp"
                id="whatsapp"
                onChange={handleInputChange}
              />
            </Field>
          </FieldGroup>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>
          <LeafletContainer>
            <Map center={initialPosition} zoom={15} onClick={handleMapClick}>
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={selectedPosition} />
            </Map>
          </LeafletContainer>
          <FieldGroup className="field-group">
            <Field className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select
                name="uf"
                id="uf"
                value={selectedUf}
                onChange={handleSelectedUf}
              >
                <option value="0">Selecione um Estado</option>
                {ufs.map((uf) => (
                  <option key={uf} value={uf}>
                    {uf}
                  </option>
                ))}
              </select>
            </Field>
            <Field className="field">
              <label htmlFor="city">Cidade</label>
              <select
                name="city"
                id="city"
                value={selectedCity}
                onChange={handleSelectedCity}
              >
                <option value="0">Selecione uma Cidade</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </Field>
          </FieldGroup>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Ítens de coleta</h2>
            <span>Selecione um ou mais ítens abaixo</span>
          </legend>
          <ItensGrid className="items-grid">
            {itens.map((item) => (
              <li
                key={item.id}
                onClick={(): void => handleSelectedItem(item.id)}
                className={selectedItems.includes(item.id) ? 'selected' : ''}
              >
                <img src={item.image_url} alt={item.title} />
                <span>{item.title}</span>
              </li>
            ))}
          </ItensGrid>
        </fieldset>
        <div className="buttons">
          <button type="submit">Cadastrar ponto de coleta</button>
        </div>
      </Form>
    </PageCreatePoint>
  );
};

export default CreatePoint;
