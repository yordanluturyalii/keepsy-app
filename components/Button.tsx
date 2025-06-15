import { Text, TouchableOpacity, View } from "react-native";
import Add from "@/assets/images/add.svg";

type ButtonProps = {
    text?: string;
    isIcon: boolean;
    disabled?: boolean;
    onPress?: () => void;
    className?: string;
};

const Button = ({ text, isIcon, disabled = false, onPress, className }: ButtonProps) => {
    const baseIconStyle = "h-11 rounded-full border items-center justify-center";
    const baseTextStyle = "px-6 py-3 rounded-full border";

    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            activeOpacity={0.7}
            accessibilityRole="button"
            className={className}
        >
            {isIcon ? (
                <View
                    className={`${baseIconStyle} w-11 ${disabled
                        ? "bg-neutral-100 border-neutral-100"
                        : "bg-primary-600 border-primary-500"
                        } flex items-center justify-center`}
                >
                    <Add
                        width={20}
                        height={20}
                        className={disabled ? "text-neutral-400 " : "text-white"}
                    />
                </View>
            ) : (
                <View
                    className={`${baseTextStyle} w-full ${disabled
                        ? "bg-neutral-100 border-neutral-100"
                        : "bg-primary-600 border-primary-500"
                        }`}
                >
                    <Text
                        className={`text-center font-medium ${disabled ? "text-neutral-400" : "text-white"
                            }`}
                    >
                        {text}
                    </Text>
                </View>
            )}
        </TouchableOpacity>
    );
};

export default Button;
