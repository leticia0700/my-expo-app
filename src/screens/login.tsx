import { BotaoCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useState } from 'react';
import { Text, View } from 'react-native';

export function LoginScreen() {
  const [login, setLogin] = useState('');
  const [Senha, setSenha] = useState('');

  function logar() {
    console.log('login', login, 'Senha', Senha);
  }

  return (
    <View className="flex-1 items-center justify-center bg-gray-50">
      <View className="w-full items-center justify-center gap-5 p-5">
        <Text className="text-3xl">Nosso app</Text>

        <InputCustomizado
          placeholder="Login"
          onChangeText={(text) => {
            setLogin(text);
          }}
        />
        <InputCustomizado
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(text) => {
            setSenha(text);
          }}
        />
        <BotaoCustomizado title="Entrar" onPress={logar} />
        <View className="flex-row gap-4">
          <Text className="text-xl text-blue-400">cadastre-se</Text>
          <Text className="text-xl">|</Text>
          <Text className="text-xl text-blue-400">esqueceu senha?</Text>
        </View>
      </View>
    </View>
  );
}
