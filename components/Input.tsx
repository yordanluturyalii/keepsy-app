import { useState } from "react";
import { Text, TextInput, View } from "react-native";

type InputProps = {
    label: string;
    placeholder: string;
    value: string | undefined;
    name: string;
    onChange: (text: string) => void;
    disabled?: boolean;
    className?: string;
    error?: string | null;
};

const Input = ({
    label,
    placeholder,
    value,
    name,
    onChange,
    disabled = false,
    className,
    error,
}: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);

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
        <View className={`w-full $${className}`}>
            <Text className="text-body-80 font-medium text-neutral-900 mb-1">{label}</Text>
            <TextInput
                placeholder={placeholder}
                onChangeText={onChange}
                value={value}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                editable={!disabled}
                className={`rounded-xl text-body-80 font-medium px-3 border ${getBorderColor()} ${getBackgroundColor()}`}
            />
        </View>
    );
};

export default Input;
