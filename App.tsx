import { StatusBar } from 'expo-status-bar';

import './global.css';
import { LoginScreen } from '@/screens/login';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TelaContador } from '@/screens/TelaContador';
import { Media } from '@/screens/media';
import { ParImpar } from '@/screens/Par_Impar';



export default function App() {
  return (
    <>
      <SafeAreaView className='flex-1'>
         <ParImpar/> 
        
        </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}
