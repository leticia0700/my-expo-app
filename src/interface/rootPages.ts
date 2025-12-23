import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
login:undefined;
soma:undefined;
listas:undefined;
listaNumero: undefined
};

export type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList
  
>;