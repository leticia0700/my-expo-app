import { StatusBar } from 'expo-status-bar';

import './global.css';
import { LoginScreen } from '@/screens/login';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TelaContador } from '@/screens/TelaContador';
import { Media } from '@/screens/media';
import { ParImpar } from '@/screens/Par_Impar';
import { ListaScreen } from '@/screens/lista';
import { StackScreen } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Soma } from '@/screens/soma';
import { RootStackParamList } from '@/interface/rootPages';
import { ListaNumeroScreen } from '@/screens/listaNumero';



export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <>
      <SafeAreaView className='flex-1'>
         <NavigationContainer>
            <Stack.Navigator
            initialRouteName='listaNumero'
            
            screenOptions={{ headerShown: false 
              
            }}> 
              <Stack.Screen name="login" component={LoginScreen} />
              <Stack.Screen name="soma" component={Soma} />
              <Stack.Screen name="listas" component={ListaScreen} />
              <Stack.Screen name="listaNumero" component={ListaNumeroScreen} />




            </Stack.Navigator>
          </NavigationContainer> 
        
        </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}
