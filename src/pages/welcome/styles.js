import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        backgorundcolor:'#FFA07A',
    },
    containerLogo:{    
        width: '100%',
        resizeMode: 'contain',
        justifyContent:'center,',
        alignItems:'center'    
    },
    containerForm:{
        flex:1,
        backgroundColor:'#fff',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    Title:{
        fontSize: 24,
        fontWeight :'bold',
        marginTop : 28,
        marginBottom : 5,
    },
    text:{
        color:'#a1a1a1',
        fontSize: 8
    }
})
