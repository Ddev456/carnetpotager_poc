import { genSaltSync, hashSync } from "bcrypt-ts";

export default function saltAndHashPassword(password: string) {
    const salt = genSaltSync(10);
    return hashSync(password, salt);
}