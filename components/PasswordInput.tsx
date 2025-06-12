import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import EyeOff from "@/assets/images/eye-slash.svg";

type PasswordInputProps = {
    label: string;
    placeholder: string;
    value: string | undefined;
    name: string;
    onChange: (text: string) => void;
    disabled?: boolean;
    className?: string;
    error?: string | null;
}

const PasswordInput = ({
    label,
    placeholder,
    value,
    name,
    onChange,
    disabled = false,
    className,
    error,
}: PasswordInputProps) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [isShow, setIsShow] = useState<boolean>(false);

    const getBorderColor = () => {
        if (error) return "border-red-400";
        if (isFocused) return "border-primary-200";
        return "border-neutral-100";
    };

    const getBackgroundColor = () => {
        if (error) return "bg-red-50";
        if (disabled) return "bg-neutral-100";
        if (isFocused) return "bg-white";
        return "bg-neutral-50";
    };
    return (
        <View className={`w-full ${className}`}>
            <Text className="text-body-80 font-medium text-neutral-900 mb-1">{label}</Text>
            <View className="relative w-full">
                <TextInput
                    placeholder={placeholder}
                    secureTextEntry={!isShow}
                    onChangeText={onChange}
                    value={value}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    editable={!disabled}
                    className={`rounded-xl text-body-80 font-medium px-3 border ${getBorderColor()} ${getBackgroundColor()}`}
                />
                <TouchableOpacity
                    onPress={() => setIsShow(prev => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                    <EyeOff width={20} height={20} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PasswordInput