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
    Keyboard,
} from "react-native";
import Input from "../Input";
import PasswordInput from "../PasswordInput";
import Button from "../Button";
import { useState } from "react";

const LoginForm = () => {
    const { control, handleSubmit, formState: { errors, isValid } } = useForm<RegisterRequest>({
        resolver: zodResolver(registerValidation),
    });

    const screenHeight = Dimensions.get('window').height;

    return (
        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: 'white' }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView
                scrollEnabled={false}
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingTop: 40,
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
                paddingBottom: 34,
                backgroundColor: 'white',
                borderTopColor: '#f0f0f0',
            }}>
                <Button
                    isIcon={false}
                    text="Create an account"
                    disabled={!isValid}
                    className="w-full"
                    onPress={handleSubmit((data) => console.log(data))}
                />
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginForm