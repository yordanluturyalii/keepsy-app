import { Text, TouchableOpacity } from "react-native"
import ArrowLeft from "../assets/images/arrow-left.svg";

type BackButtonProps = {
    className?: string;
    handleNavigation: () => void;
}

const BackButton = ({className, handleNavigation}: BackButtonProps) => {
    return (
        <>
            <TouchableOpacity className={`flex flex-row gap-2 ${className} text-primary-600`} onPress={handleNavigation}>
                <ArrowLeft width={20} height={20}/>
                <Text className="text-body-90 text-primary-600 font-semibold">Back</Text>
            </TouchableOpacity>
        </>
    )
}

export default BackButton