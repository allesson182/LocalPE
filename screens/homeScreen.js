import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Touchable, TouchableOpacity } from 'react-native';
import { Linking, StyleProp, TextStyle, ViewStyle, } from 'react-native';
import { FlatList, ActivityIndicator } from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon, Image, SafeAreaView, Card, Button } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function HomeScreen({ navigation }) {

    return (
      
    <SafeAreaProvider>
      <HeaderRNE backgroundColor='#c41414' 
        leftComponent={
          <View>
              <Text style={styles.titulo}>Local PE</Text>
          </View>
        }
        rightComponent={
            <View style={styles.headerRight}>
              <TouchableOpacity style={styles.botaoLogin}>
                <Text style={styles.textoBotaoLogin}>Log in</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.botaoCadastrar}>
                <Text style={styles.textoBotaoCadastrar}>Cadastrar</Text>
              </TouchableOpacity>
            </View>
        }
       //centerComponent={{ text: 'Header', style: styles.heading }}
      />
      <Image style={styles.imagem}
        source={{ uri:  'http://www.qualviagem.com.br/wp-content/uploads/2015/11/Olinda7_Marcio-Silva.jpg'}}
        containerStyle={styles.item}
        PlaceholderContent={<ActivityIndicator />}
      /> 

      <TextInput
            style={styles.input}  
            placeholder="Search..."
      />
    <View style={styles.card}>
      <Card>
        <Card.Title>PRAÇA BELA VISTA</Card.Title>
        <Card.Divider />
        <Card.Image
          style={{ padding: 0 }}
          source={{
            uri:
                'https://www.feriasbrasil.com.br/fotosfb/802222889-MOB.jpg',
            }}
        />  
      </Card>
      <Card>
        <Card.Title>CATEDRAL CENTRAL</Card.Title>
        <Card.Divider />
        <Card.Image
          style={{ padding: 0 }}
          source={{
            uri:
                'https://media-cdn.tripadvisor.com/media/photo-s/06/0f/8c/de/catedral-igreja-sagrado.jpg',
            }}
        />  
      </Card>
    </View>  
    </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo: {
        marginTop: 5,
        width: 90,
        color: 'white',
        fontSize: 22,
        fontFamily: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
    },
    textoBotaoLogin: {
        color: 'black',
        
    },
    botaoLogin: {
        marginRight: 5,
        borderRadius: 2,
        width: 70,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f7f7f7'
    },
    textoBotaoCadastrar: {
        color: 'white',
        borderColor: '#fff'
    },
    botaoCadastrar: {
        marginRight: 5,
        borderRadius: 2,
        width: 70,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c41414',
        borderBottomColor: '#fff'
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 20,
        width: '100%',
        paddingVertical: 15,
      },
      heading: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
      },
      headerRight: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
      },
      subheaderText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
      list: {
        width: '100%',
        backgroundColor: '#000',
      },
      item: {
        aspectRatio: 1,
        width: '100%',
        height: '50%',
        flex: 1,
      },
      imagem: {
        height: '25%'
      },
      input: {
        backgroundColor: '#fff',
        width: '60%',
        height: 30,
        paddingLeft: 10,
        borderRadius: '2%',
        position: 'absolute',
        left:     83,
        top:      210,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 8
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 10
      },
      card: {
        position: 'absolute',
        left: 6,
        top:      260,
        width: 400
      }
});