import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import {
  Header,
  Container,
  PointInfo,
  Body,
  Image,
  Button,
  ItensGrid,
} from './styles';
import api from '../../services/api';
import background from '../../assets/home-background.svg';

interface Data {
  point: {
    id: number;
    image: string;
    image_url: string;
    name: string;
    email: string;
    whatsapp: string;
    city: string;
    uf: string;
  };
  items: {
    title: string;
  }[];
}
interface PointId {
  point_id: string;
}

interface Item {
  id: number;
  title: string;
  image_url: string;
}

const Detail: React.FC = () => {
  const [itens, setItens] = useState<Item[]>([]);
  const [data, setData] = useState<Data>();

  const { params } = useRouteMatch<PointId>();

  useEffect(() => {
    async function loadData(): Promise<void> {
      api.get(`points/${params.point_id}`).then((res) => {
        setData(res.data);
      });
    }
    loadData();
  }, [params.point_id]);

  useEffect(() => {
    async function loadData(): Promise<void> {
      api.get(`items/${params.point_id}`).then((res) => {
        setItens(res.data);
      });
    }
    loadData();
  }, [params.point_id]);

  return (
    <Body>
      <Container className="detail-container">
        <Button className="button">
          <Link to="/dashboard">
            <FiArrowLeft />
            Voltar para Dashboard
          </Link>
        </Button>
        {data && (
          <>
            <Header>
              <img src={data.point.image_url} alt={data.point.image} />
              <div>
                <strong>{data.point.name}</strong>
                <p>
                  {data.point.city}-{data.point.uf}
                </p>
              </div>
            </Header>
            <PointInfo>
              <div>
                <span>E-mail</span>
                <strong>{data.point.email}</strong>
              </div>

              <div>
                <span>Whatsapp</span>
                <strong>{data.point.whatsapp}</strong>
              </div>
            </PointInfo>
          </>
        )}
        <ItensGrid>
          {itens.map((item) => (
            <li key={item.id}>
              <img src={item.image_url} alt={item.title} />
              <span>{item.title}</span>
            </li>
          ))}
        </ItensGrid>
      </Container>
      <Image>
        <img src={background} alt="Imagem fundo" />
      </Image>
    </Body>
  );
};

export default Detail;
