import { Text, TouchableOpacity } from "react-native"
import ArrowLeft from "../assets/images/arrow-left.svg";

type BackButtonProps = {
    className?: string;
    handleNavigation: () => void;
}

const BackButton = ({className, handleNavigation}: BackButtonProps) => {
    return (
        <>
            <TouchableOpacity className={`flex flex-row gap-3 ${className}`}>
                <ArrowLeft width={20} height={20} className="w-80"/>
                <Text className="text-body-50 text-primary-600">Back</Text>
            </TouchableOpacity>
        </>
    )
}

export default BackButton