import { RegisterRequest } from "@/types/request";
import { registerValidation } from "@/types/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
    View,
    ScrollView,
    Dimensions,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import Input from "../Input";
import PasswordInput from "../PasswordInput";
import Button from "../Button";

type LoginFormProps = {
    onError: (error: string | undefined) => void
}

const LoginForm = ({ onError }: LoginFormProps) => {
    const { control, handleSubmit, formState: { errors, isValid, isSubmitting } } = useForm<RegisterRequest>({
        resolver: zodResolver(registerValidation),
    });

    const screenHeight = Dimensions.get('window').height;

    const onSubmit = (data: RegisterRequest) => {
        const firstError = errors.email?.message || errors.password?.message;
        onError(firstError);
        console.log(data);
        if (data.email !== "admin@gmail.com") {
            onError("Email already register");
        } else if (data.password !== "Admin@1234") onError("Password doesn't match");
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: 'white' }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView
                scrollEnabled={false}
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingTop: 20,
                    minHeight: screenHeight - 150
                }}
                showsVerticalScrollIndicator={false}
            >
                <View style={{ flex: 1 }}>
                    <View style={{ gap: 16 }}>
                        <Controller
                            control={control}
                            name="email"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    label="Email"
                                    name="email"
                                    placeholder="Enter your email"
                                    onChange={onChange}
                                    value={value}
                                    error={errors.email?.message || ""}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="password"
                            render={({ field: { onChange, value } }) => (
                                <PasswordInput
                                    label="Password"
                                    name="password"
                                    placeholder="Enter your password"
                                    onChange={onChange}
                                    value={value}
                                    error={errors.password?.message || ""}
                                />
                            )}
                        />
                    </View>
                </View>
            </ScrollView>

            <View style={{
                paddingTop: Platform.OS === "ios" ? 34 : 20,
            }}>
                <Button
                    isIcon={false}
                    text="Create an account"
                    disabled={isSubmitting || !isValid}
                    className="w-full"
                    onPress={handleSubmit(onSubmit)}
                />
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginForm