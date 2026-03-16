// Problem 4
import { Student, Athlete } from "../types";
const allAthletes = (students, sport) => {
    return students.map(s => {
        return {
            ...s,
            sport: s.sport || sport
        }
    })
}

export default allAthletes; // Uncomment this line when done writing the function
