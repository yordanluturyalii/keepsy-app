import { Slot } from "expo-router"
import { ScrollView, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const AuthLayout = () => {
    return (
        <SafeAreaView className="bg-white h-screen">
            <View>
                <Slot />
            </View>
        </SafeAreaView>
    )
}

export default AuthLayout