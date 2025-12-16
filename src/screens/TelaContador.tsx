import { useState} from "react";
import { View, Text } from "react-native";
import { BotaoCustomizado } from "@/components/botaoCustomizado";


export function TelaContador() {
    const [contador, setContador] = useState(0);

    return(
        <View className="flex-1 items-center justify-center gap-5">
            <Text className="text-4xl">{contador}</Text>

            <View className="flex-row p-24 gap-5">

            <BotaoCustomizado
            title="+"
            onPress={() => setContador(contador + 1)} 
            />

            <BotaoCustomizado
            title="-"
            onPress={() => setContador(contador - 1)} 
            />
            </View>
        </View>    

    );
} 
