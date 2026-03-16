// Problem 6
import { User } from "../types";

const verifyUser = (user: object) => {

    let check: string[] = ['id','name','address','street','city']
    //Checks if empty
    if (user == null) {
        check.push("userData")
        return check
    }
    let special = Object.keys(user)
    let update: string[] = []

    if (user.address) {
        special.push(...Object.keys(user.address))
    }

    for (let i = 0; i < check.length; i += 1) {
        let current = check[i]

        if (!special.includes(current)) {
            update.push(current)
        }
    }
    if (update.length === 0) {
        return user
    } else {
    return update
    }
}
export default verifyUser;
