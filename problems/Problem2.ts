//Problem 2
import { Student } from "../types";
const arrayOfStudents = <T>(names: T[], ages: T[]) => {
    return names.map((value, index) => ({
        'name': value,
        'age': ages[index],

    }))
}
export default arrayOfStudents;
