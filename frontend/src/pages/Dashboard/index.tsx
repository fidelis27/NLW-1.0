import React, { useEffect, useState, ChangeEvent } from 'react';
import axios from 'axios';
import { FiHeart, FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import { Marker, Map, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent, icon } from 'leaflet';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

// Todo css foi definido atraves do styled-component
/* import './styles.css'; */

import {
  Aside,
  Button,
  Container,
  Field,
  FieldGroup,
  Footer,
  Main,
} from './styles';

interface IBGEResponse {
  sigla: string;
}
interface IBGECityResponse {
  nome: string;
}
interface Item {
  id: number;
  title: string;
  image_url: string;
}

interface Point {
  id: number;
  name: string;
  image: string;
  image_url: string;
  latitude: number;
  longitude: number;
}

const Dashboard: React.FC = () => {
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [selectedUf, setSeletectedUf] = useState<string>('0');
  const [selectedCity, setSeletectedCity] = useState<string>('0');

  const [itens, setItens] = useState<Item[]>([]);
  const [selectedItens, setSelectedItens] = useState<number[]>([]);

  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  const [points, setPoints] = useState<Point[]>([]);

  const navigation = useHistory();

  useEffect(() => {
    api
      .get('points', {
        params: {
          uf: selectedUf,
          city: selectedCity,
          items: selectedItens,
        },
      })
      .then((res) => {
        setPoints(res.data);
      });
  }, [selectedItens, selectedUf, selectedCity]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setInitialPosition([latitude, longitude]);
      setSelectedPosition([latitude, longitude]);
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

  useEffect(() => {
    api.get('items').then((res) => {
      setItens(res.data);
    });
  }, []);
  function handleSelectedItem(id: number): void {
    const alreadySelected = selectedItens.findIndex(
      (item: number) => item === id,
    );

    if (alreadySelected >= 0) {
      const fileterItens = selectedItens.filter((item: number) => item !== id);
      setSelectedItens(fileterItens);
    } else {
      setSelectedItens([...selectedItens, id]);
    }
  }

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
  function handleNavigateToDetail(point_id: number): void {
    navigation.push(`/detail/${point_id}`);
  }

  return (
    <div id="dashboard">
      <Container className="container ">
        <header>
          <img src={logo} alt="Ecoleta" />
        </header>
        <Main>
          <Map center={initialPosition} zoom={25} onClick={handleMapClick}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker title="você está aqui" position={selectedPosition} />
            {points.map((point: Point) => (
              <Marker
                key={point.id}
                onclick={(): void => {
                  handleNavigateToDetail(point.id);
                }}
                position={[point.latitude, point.longitude]}
                title={point.name}
                icon={icon({
                  iconUrl: `${point.image_url}`,
                  iconSize: [60, 60],
                  className: 'point-info',
                })}
              />
            ))}
          </Map>
          <div className="group">
            <div className="itensContainer">
              {itens.map((item: Item) => (
                <button
                  type="button"
                  key={item.id}
                  style={
                    selectedItens.includes(item.id)
                      ? {
                          borderStyle: 'solid',
                          borderColor: '#34CB79',
                          borderWidth: 2,
                        }
                      : {}
                  }
                  className="itens"
                  onClick={(): void => handleSelectedItem(item.id)}
                >
                  <img src={item.image_url} alt="imagem" />
                  <span className="item-title">{item.title}</span>
                </button>
              ))}
            </div>

            <Button className="button">
              <Link to="/create-point">
                <span>
                  <FiLogIn />
                </span>
                <strong>Cadastre um ponto de coleta</strong>
              </Link>
            </Button>
          </div>
        </Main>
        <Aside>
          <strong>Filtros:</strong>
          <FieldGroup className="field-group">
            <Field className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select
                name="uf"
                id="uf"
                value={selectedUf}
                onChange={(uf) => handleSelectedUf(uf)}
              >
                <option value="0">Selecione um Estado...</option>
                {ufs.map((uf: string) => (
                  <option key={String(uf)} value={String(uf)}>
                    {uf}
                  </option>
                ))}
              </select>
            </Field>
            <Field className="field">
              <label htmlFor="uf">Cidade</label>
              <select
                name="city"
                id="city"
                value={selectedCity}
                onChange={(city) => handleSelectedCity(city)}
              >
                <option value="0">Selecione uma cidade...</option>
                {cities.map((city: string) => (
                  <option key={String(city)} value={String(city)}>
                    {city}
                  </option>
                ))}
              </select>
            </Field>
          </FieldGroup>
        </Aside>
        <Footer>
          <div className="footer">
            <span>
              Desenvolvido com <FiHeart /> por
              <strong>
                {' '}
                <span className="text-danger">THIAGO</span>Fidelis
              </strong>
            </span>
          </div>
        </Footer>
      </Container>
    </div>
  );
};

export default Dashboard;
