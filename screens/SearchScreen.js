import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

export default function SearchScreen() {
  const [searchApi, results, errorMessage] = useResults();
  //console.log(results);
  const [term, setTerm] = useState('');


  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        OnTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> :  
      <>
        {results.length == 0 ? (
        <Text></Text>
      ) : (
        <>
          <ResultList title='Ucuz Restaurantlar'
            results={filterResultsByPrice('₺')} />
          <ResultList title='Uygun Restaurantlar'
            results={filterResultsByPrice('₺₺')} />
          <ResultList title='Pahalı Restaurantlar'
            results={filterResultsByPrice('₺₺₺')} /> 
         </>
         )}
         </>
         }
      

    </View>
  );
};

const styles = StyleSheet.create({});