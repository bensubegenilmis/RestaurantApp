import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

export default function SearchScreen() {
  const [searchApi,results] = useResults();
  //console.log(results);
  const [term, setTerm] = useState('');

  
  const filterResultsByPrice = (price) => {
    return results.filter((results) =>{
      return results.price === price
    });
  };

  return (
    <View>
      <SearchBar
       term={term}
       onTermChange={setTerm}
       OnTermSubmit={() => searchApi (term)}
       />
      
      <ResultList title = 'Ucuz Restaurantlar'
      results={filterResultsByPrice('₺')} />
      <ResultList title = 'Uygun Restaurantlar'
      results={filterResultsByPrice('₺₺')} />
      <ResultList title = 'Pahalı Restaurantlar'
      results={filterResultsByPrice('₺₺₺')} />
    </View>
  );
};

const styles = StyleSheet.create({});