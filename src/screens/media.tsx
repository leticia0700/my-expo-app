import { BotaoCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
export function Media() {
  const [Valor1, setValor1] = useState('');
  const [Valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState<number>(0);

  console.log('valor1:', Valor1);
  console.log('valor2:', Valor2);
  console.log('Resultado:', resultado);

  useEffect(() => {
    setResultado(0);
  }, [Valor1, Valor2]);

  function Tirarmedia() {
    const num1 = parseFloat(Valor1);
    const num2 = parseFloat(Valor2);
    setResultado(((num1) + (num2)) / 2);
  }

  return (
    <View className="flex-1 items-center justify-center">
      <View className="w-full flex-1 items-center justify-center gap-4 p-4">
        <Text className="text-3xl text-gray-700">Media</Text>

        <InputCustomizado
          placeholder="Valor1"
          keyboardType="decimal-pad"
          onChangeText={(text) => setValor1(text)}
        />
        <InputCustomizado
          placeholder="Valor2"
          keyboardType="decimal-pad"
          onChangeText={(text) => setValor2(text)}
        />

        <BotaoCustomizado title="media" onPress={Tirarmedia} />
        <Text>Media dos valores:{resultado}</Text>
      </View>
    </View>
  );
}
