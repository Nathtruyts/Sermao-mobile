import { creativeNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from '../pages/welcome';
import Signin from '../pages/signin';

const Stack = creativeNativeStackNavigator

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{HeaderShown: false}}
            />

            <Stack.Screen
              name="Cadastro"
              component={Signin}
              options={{HeaderShown: false}}
            />        
        </Stack.Navigator>

    );
}