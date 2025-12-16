import { BotaoCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useState } from 'react';
import { Text, View } from 'react-native';

export function ParImpar() {
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState('');

  function verificarPar_Impar() {
    const numero = Number(valor);

    if (numero % 2 === 0) {
      setResultado('o numero é par');
    } else {
      setResultado('o numero é impar');
    }
  }

  return (
    <View className="flex-1 items-center justify-center">
      <View className="w-full flex-1 items-center justify-center gap-4 p-5">
        <Text className="text-3xl">impar ou par</Text>
        <InputCustomizado value={valor} onChangeText={setValor} keyboardType='numeric'/>
        <BotaoCustomizado title="resultado" onPress={verificarPar_Impar} />
        <Text className="text-3xl">{resultado}</Text>
      </View>
    </View>
  );
}
