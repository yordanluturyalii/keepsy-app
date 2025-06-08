import { Link } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"

const HomeScreen = () => {
    return (
        <SafeAreaView className="gap-y-3">
            <Link href={'/'}>Halow</Link>
        </SafeAreaView>
    )
}

export default HomeScreen