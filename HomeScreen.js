import {Button, Text, View,StatusBar,SafeAreaView, StyleSheet,ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useState,useEffect } from 'react';
import { Image } from 'react-native';
import styled from 'styled-components';

const HomeScreen = () => {
  const [products, setProducts] = useState(null);

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products?limit=10')
    .then(res=>setProducts(res.data))
  },[])
   
  const navigation = useNavigation();

  return (  
    <MainView>
      <MainButton 
        title='ჩვენს შესახებ'
        onPress={()=>navigation.navigate('About')}
      />

      <MainTitle>პროდუქტის გვერდი</MainTitle>
      
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}> 
          <View >
            {products?.map(({title, image, price})=>             
              <CardView>
                <TitleText >{title} </TitleText>
                <Price>ფასი: {price} ლარი</Price>
                <Image source={{uri:image}} style = {{ width: "100%", height: 400 , }} />
              </CardView>
            )}
          </View> 
        </ScrollView>
      </SafeAreaView>       
    </MainView>
  );
}


export default HomeScreen;


const CardView= styled(View)`
  marginBottom: 30px;
  borderRadius: 20px;
  backgroundColor: blue;
  padding: 10px;
`

const MainButton= styled(Button)`
  border-radius: 20px;
`
const MainView= styled(View)`
  flex: 1;
  alignItems: center;
  justifyContent: center;
`


const MainTitle= styled(Text)`
font-size:20px;
margin-top: 20px;
color: black;
`

const TitleText= styled(Text)`
font-size:20px;
margin-top:5px;
margin-bottom:5px;
color: #fff;
`

const Price = styled(Text)`
color:#fff;
margin-top:5px;
margin-bottom:5px;
font-size:20px;
`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    
    marginHorizontal: 0,
  },
  
});