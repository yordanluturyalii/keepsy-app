import { object, string } from "zod"

const numberRegex = /[0-9]/;
const alphabetRegex = /[A-Z]/;

export const registerValidation = object({
    email: string().email(),
    password: string()
        .min(8)
        .regex(numberRegex, "Password must contain a number")
        .regex(alphabetRegex, "Password must contain an uppercase letter")
});