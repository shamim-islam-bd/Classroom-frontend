
export const getAllStudents = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: StudentConstant.GET_ALL_STUDENTS_REQUEST });
            const res = await axios.get("/student/getAllStudents");
            if (res.status === 200) {
                const { students } = res.data;
                dispatch({
                    type: StudentConstant.GET_ALL_STUDENTS_SUCCESS,
                    payload: { students },
                });
            } else {
                dispatch({
                    type: StudentConstant.GET_ALL_STUDENTS_FAIL,
                    payload: res.data.error,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const getSingleStudent = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: StudentConstant.GET_SINGLE_STUDENT_REQUEST });
            const res = await axios.get(`/student/getSingleStudent/${id}`);
            if (res.status === 200) {
                const { student } = res.data;
                dispatch({
                    type: StudentConstant.GET_SINGLE_STUDENT_SUCCESS,
                    payload: { student },
                });
            } else {
                dispatch({
                    type: StudentConstant.GET_SINGLE_STUDENT_FAIL,
                    payload: res.data.error,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
}

export const updateStudentProfile = (id, student) => {
    return async (dispatch) => {
        try {
            dispatch({ type: StudentConstant.UPDATE_STUDENT_PROFILE_REQUEST });
            const res = await axios.put(`/student/updateStudentProfile/${id}`, student);
            if (res.status === 200) {
                const { student } = res.data;
                dispatch({
                    type: StudentConstant.UPDATE_STUDENT_PROFILE_SUCCESS,
                    payload: { student },
                });
            } else {
                dispatch({
                    type: StudentConstant.UPDATE_STUDENT_PROFILE_FAIL,
                    payload: res.data.error,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
}


export const deleteStudent = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: StudentConstant.DELETE_STUDENT_REQUEST });
            const res = await axios.delete(`/student/deleteStudent/${id}`);
            if (res.status === 200) {
                const { student } = res.data;
                dispatch({
                    type: StudentConstant.DELETE_STUDENT_SUCCESS,
                    payload: { student },
                });
            } else {
                dispatch({
                    type: StudentConstant.DELETE_STUDENT_FAIL,
                    payload: res.data.error,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
}


export const addToFavoriteTeacher = (id, teacherId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: StudentConstant.ADD_TO_FAVORITE_TEACHER_REQUEST });
            const res = await axios.put(`/student/addToFavoriteTeacher/${id}`, { teacherId });
            if (res.status === 200) {
                const { student } = res.data;
                dispatch({
                    type: StudentConstant.ADD_TO_FAVORITE_TEACHER_SUCCESS,
                    payload: { student },
                });
            } else {
                dispatch({
                    type: StudentConstant.ADD_TO_FAVORITE_TEACHER_FAIL,
                    payload: res.data.error,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
}


export const removeFromFavoriteTeacher = (id, teacherId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: StudentConstant.REMOVE_FROM_FAVORITE_TEACHER_REQUEST });
            const res = await axios.put(`/student/removeFromFavoriteTeacher/${id}`, { teacherId });
            if (res.status === 200) {
                const { student } = res.data;
                dispatch({
                    type: StudentConstant.REMOVE_FROM_FAVORITE_TEACHER_SUCCESS,
                    payload: { student },
                });
            } else {
                dispatch({
                    type: StudentConstant.REMOVE_FROM_FAVORITE_TEACHER_FAIL,
                    payload: res.data.error,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
}


export const addToFavoriteCourse = (id, courseId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: StudentConstant.ADD_TO_FAVORITE_COURSE_REQUEST });
            const res = await axios.put(`/student/addToFavoriteCourse/${id}`, { courseId });
            if (res.status === 200) {
                const { student } = res.data;
                dispatch({
                    type: StudentConstant.ADD_TO_FAVORITE_COURSE_SUCCESS,
                    payload: { student },
                });
            } else {
                dispatch({
                    type: StudentConstant.ADD_TO_FAVORITE_COURSE_FAIL,
                    payload: res.data.error,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
}


export const removeFromFavoriteCourse = (id, courseId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: StudentConstant.REMOVE_FROM_FAVORITE_COURSE_REQUEST });
            const res = await axios.put(`/student/removeFromFavoriteCourse/${id}`, { courseId });
            if (res.status === 200) {
                const { student } = res.data;
                dispatch({
                    type: StudentConstant.REMOVE_FROM_FAVORITE_COURSE_SUCCESS,
                    payload: { student },
                });
            } else {
                dispatch({
                    type: StudentConstant.REMOVE_FROM_FAVORITE_COURSE_FAIL,
                    payload: res.data.error,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
}

