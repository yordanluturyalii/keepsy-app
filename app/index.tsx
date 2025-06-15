import LoginBottomSheet from "@/components/bottom-sheet/LoginBottomSheet";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
	const route = useRouter();
	return (
		<SafeAreaView className="gap-y-3">
			<LoginBottomSheet />
		</SafeAreaView>
	);
};

export default HomeScreen;
