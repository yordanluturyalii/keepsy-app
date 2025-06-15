import { useMemo, useRef, useState } from "react";
import { Button, Dimensions, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BackButton from "../BackButton";
import LoginForm from "../form/LoginForm";
import Toast from "../Toast";

const LoginBottomSheet = () => {
    const sheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ["100%"], []);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [toastMessage, setToastMessage] = useState<string | undefined>("");
    const [isOpenToast, setIsOpenToast] = useState<boolean>(false);
    const height = Dimensions.get("window").height;

    return (
        <GestureHandlerRootView className="bg-gray-900" style={{
            height: height,
        }}>
            <Text onPress={() => setIsOpen(true)}>Register Screen</Text>
            {
                isOpen &&
                <BottomSheet
                    ref={sheetRef}
                    snapPoints={snapPoints}
                    handleComponent={() => null}
                    enableDynamicSizing={false}
                    backgroundStyle={styles.bottomSheetBackground}
                >
                    <BottomSheetView style={{ padding: 20, height: height }} className="flex-1">
                        <BackButton handleNavigation={() => setIsOpen(false)} />
                        <View className="gap-2" style={{ marginTop: 24, marginBottom: 20 }}>
                            <Text className="text-title-50 text-neutral-900 font-semibold">Create Account</Text>
                            <Text className="text-neutral-500 font-medium text-body-50">
                                You'll use this to log into your account.
                            </Text>
                        </View>
                        {
                            isOpenToast && <Toast text={toastMessage} color="danger" isOpen={isOpenToast} setIsOpen={() => setIsOpenToast(false)} />
                        }
                        <LoginForm onError={(error: string | undefined) => {
                            setToastMessage(error);
                            setIsOpenToast(true);
                        }} />
                    </BottomSheetView>
                </BottomSheet>
            }
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    bottomSheetBackground: {
        backgroundColor: "#ffff",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
});
export default LoginBottomSheet