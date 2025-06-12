import { Text, View } from "react-native";
import BackButton from "@/components/BackButton";
import Input from "@/components/Input";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { RegisterRequest } from "@/types/request";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerValidation } from "@/types/validation";
import PasswordInput from "@/components/PasswordInput";
import Button from "@/components/Button";

const RegisterScreen = () => {
    const route = useRouter();
    const { control, handleSubmit, formState: { errors } } = useForm<RegisterRequest>({
        resolver: zodResolver(registerValidation),
    });

    return (
        <View className="flex flex-col h-screen p-4 bg-white justify-between">
            <View>
                <BackButton handleNavigation={() => route.back()} />

                <View className="gap-2">
                    <Text className="text-title-50 text-neutral-900 font-semibold">Create Account</Text>
                    <Text className="text-neutral-500 font-medium text-body-50">
                        You'll use this to log into your account.
                    </Text>
                </View>

                <View className="gap-4 mt-10">
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

            <Button
                isIcon={false}
                text="Create an account"
                disabled={false}
                className="w-full"
                onPress={handleSubmit((data) => console.log(data))}
            />
        </View>
    );
};

export default RegisterScreen;
