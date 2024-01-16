import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:3000/api/v1"
    
});

export async function registerStudent(data){
    const response = await Api.post("/register/student", data);
    await response.data;
}

export async function registerTeacher(data){
    const response = await Api.post("/register/teacher", data);
    await response.data;
}

export async function loginStudent(data){
    const response = await Api.post("/login/student", data);
    await response.data;
}

export async function loginTeacher(data){
    const response = await Api.post("/login/teacher", data);
    await response.data;
}

export async function addGrade(grade){
    const response = await Api.post("/add-grade", grade);
}