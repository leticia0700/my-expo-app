import { 
    Button,
    ButtonProps,
    View
} from "react-native";

export function BotaoCustomizado (
    {...rest}: ButtonProps
)  {
    return (
        <View
        
        className="rounded-2xl w-full"
        > 
        <Button 
        {...rest}
        />
        </View>
    )

}