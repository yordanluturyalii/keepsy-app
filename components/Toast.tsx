import { Text, View } from "react-native"
import IconSuccess from "@/assets/images/close-success.svg"
import IconDanger from "@/assets/images/close-danger.svg"
import IconPrimary from "@/assets/images/close-primary.svg"
import { useState } from "react"

type ToastProps = {
    text: string | undefined;
    color: "danger" | "success" | "primary";
    isOpen: boolean;
    setIsOpen: () => void;
}

const Toast = ({ text, color, isOpen, setIsOpen }: ToastProps) => {
    const getColor = () => {
        if (color === "success") return "bg-green-50 border-green-200 text-green-600"
        else if (color === "primary") return "bg-blue-50 border-blue-200 text-blue-600"
        return "bg-red-50 border-red-200 text-red-500"
    }

    const getIcon = () => {
        if (color === "success") return <IconSuccess width={20} height={20} />
        else if (color === "primary") return <IconPrimary width={20} height={20} />
        return <IconDanger width={20} height={20} />
    }

    return (
        isOpen && <View className={`w-full h-12 flex flex-row justify-between items-center px-3 rounded-xl border ${getColor()}`}>
            <Text className="text-body-90 font-semibold">{text}</Text>
            <Text onPress={setIsOpen}>
                {getIcon()}
            </Text>
        </View>
    )
}

export default Toast