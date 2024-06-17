import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
    students: JSON.parse(localStorage.getItem('students')) || [],
};

const studentsSlice = createSlice({
    name: "students",
    initialState,
    reducers: {
        addStudent(state, action) {
            
            state.students.push(action.payload);
            localStorage.setItem('students', JSON.stringify(state.students))
        },
        removeStudent(state, action) {
            const { id } = action.payload;
            state.students = state.students.filter((student) => student.id !== id);
            localStorage.setItem('students', JSON.stringify(state.students))
        },
        editStudent(state, action) {
            const index = state.students.findIndex((student) => student.id === action.payload.id);
            if (index !== -1) {
                state.students[index] = {...state.students[index], ...action.payload};
                localStorage.setItem('students', JSON.stringify(state.students))
            }
        },
        addLesson(state, action) {
            console.log(action.payload);
            const student = state.students.find((student) => student.id === action.payload.id);
                        
            if (student) {
                student.lessons.push(action.payload.lesson);
                localStorage.setItem('students', JSON.stringify(state.students))
            }
            
        },
        togglePaid(state, action) {
            const student = state.students.find((student) => student.id === action.payload.idStudent);
            if (student) {
                const lesson = student.lessons.find(lesson => lesson.id === action.payload.idLesson);
                if (lesson) {
                    lesson.paid = !lesson.paid;
                    localStorage.setItem('students', JSON.stringify(state.students))
                }
            }
        }
         
    }
})

export const { addStudent, removeStudent, editStudent, addLesson, togglePaid } = studentsSlice.actions;

export const store = configureStore({
    reducer: {
        students: studentsSlice.reducer,
    },
});