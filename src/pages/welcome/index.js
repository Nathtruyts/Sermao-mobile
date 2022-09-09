import React from 'react';
import { View, Text, Image} from 'react-native';
import StyleSheet from './styles'

export default function Welcome() {
    return (
      <View style={styles.container}>

      <View style={styles.conatinerLogo}>
        <Image
           source={require('../../assets/Logo.png')}
           style={{ width: '100%'}}
           resizeMode ='contain'
         />  
      </View> 

      <View style={styles.containerForm}>
        <Text>Organize a sua igreja com poucos cliques!</Text>
        <Text>Faça login para continuar</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>

      </View> 
    );
}