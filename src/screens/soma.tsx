import { BotaoCustomizado } from "@/components/botaoCustomizado";
import { InputCustomizado } from "@/components/inputCustomizado";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

export function Soma () {
    const[Valor1, setValor1] = useState('');
    const[Valor2, setValor2] = useState('');
    const[resultado, setResultado] = useState<number>(0);

    console.log('valor1:', Valor1);
    console.log('valor2:', Valor2);
    console.log('Resultado:', resultado);

    useEffect(() => { 
        setResultado(0);
    }, [Valor1, Valor2, ]);

    function Somarvalores() {
        const num1 = parseFloat(Valor1);
        const num2 = parseFloat(Valor2);
        setResultado(num1+ num2);
    }

    return(
        <View className="flex-1 items-center justify-center">
            <View className="w-full flex-1 items-center justify-center p-4 gap-4">
                <Text className="text-3xl text-gray-700">Soma dos valores</Text>

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
                
                <BotaoCustomizado title="somar" onPress={Somarvalores} />
                <Text>Resultado da soma:{resultado}</Text>
                
            </View>
        </View>
    )
}