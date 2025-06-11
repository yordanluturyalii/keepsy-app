import BackButton from "@/components/BackButton";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
	const route = useRouter();
	return (
		<SafeAreaView className="gap-y-3">
			<Link href={"/register"}>Halow</Link>
		</SafeAreaView>
	);
};

export default HomeScreen;
