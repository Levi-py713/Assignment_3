// Problem 3
import { Professor, Class, Student } from "../types";
const studentsTaughtByProf = <T>(oob: Professor) => {
    let list1 = []

    for (let i = 0; i < oob.classes.length; i += 1) {

        for (let j = 0; j < oob.classes[i].students.length; j += 1) {
            const student = oob.classes[i].students[j]
            const alreadyAdded = list1.some(s => s.name === student.name)
            if (!alreadyAdded) {
                list1.push(student);
            }
        }
    
    }
    list1.sort((a,b) => a.age - b.age);
    return list1.map(s => s.name)
}
export default studentsTaughtByProf;
