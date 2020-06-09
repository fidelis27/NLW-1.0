import React, { useEffect, useState } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { ImageBackground, View, Image, StyleSheet, Text, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';

interface IBGEResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}
interface Items {
  label: string;
  value: string;
}[]

const Home: React.FC = () => {
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [selectedUf, setSeletectedUf] = useState<string>('0');
  const [selectedCity, setSeletectedCity] = useState<string>('0');

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
  const navigation = useNavigation();
  const itensUfs = ufs.map(function (uf) {
    return { label: uf, value: uf }
  });

  const DropdownUf = () => {
    return (
      <RNPickerSelect
        placeholder={{
          label: 'Selecione um estado...',
          value: null,
        }}
        onValueChange={(uf) => setSeletectedUf(uf)}
        value={selectedUf}
        items={
          itensUfs}
      />
    );
  };


  const itensCities = cities.map(function (city) {
    return { label: city, value: city }
  });
  const DropdownCity = () => {
    return (
      <RNPickerSelect
        placeholder={{
          label: 'Selecione uma cidade...',
          value: null,
        }}
        onValueChange={(city) => setSeletectedCity(city)}
        value={selectedCity}
        items={
          itensCities}
      />
    );
  };

  function handleNavigateToPoints() {
    if(selectedUf === '0' || selectedCity ==='0') {
      Alert.alert("Antes de continuar selecione o estado e a cidade.");
      return;
    }
    navigation.navigate('Points', {
      uf:selectedUf,
      city:selectedCity
    })
    setSeletectedCity('0');
    setSeletectedUf('0');
  }
  return (
    <ImageBackground
      source={require('../../assets/home-background.png')}
      style={styles.container}
      imageStyle={{ width: 274, height: 368 }}
    >
      <View style={styles.main}>
        <Image source={require('../../assets/logo.png')} />
        <Text style={styles.title}>Seu marketplace de coleta de resíduos.</Text>
        <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</Text>
      </View>
      <View style={styles.footer}>
        <DropdownUf />
        <DropdownCity />
        <RectButton style={styles.button}
          onPress={handleNavigateToPoints}>
          <View style={styles.buttonIcon}>
            <Text>
              <Icon name="arrow-right" color="#fff" size={26} />
            </Text>
          </View>
          <Text style={styles.buttonText}>Entrar</Text>
        </RectButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,

  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {

    justifyContent: 'center',
  },


  select: {},

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }
});

export default Home;
