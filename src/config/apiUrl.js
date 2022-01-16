const MAIN_URL = "http://localhost:8000/api/"

// user authentication url
export const LOGIN = MAIN_URL+"login"
export const SIGNUP = MAIN_URL+"sign-up"
export const LOGOUT = MAIN_URL+"logout"

// tutorial url
export const CREATE_TUTORIALS = MAIN_URL+"tutorials"
export const FIND_ALL_TITLE = MAIN_URL+"tutorials"
export const findAllCategories = MAIN_URL+"tutorials"
export const findAllPublished = MAIN_URL+"tutorials"
export const findOne = MAIN_URL+"tutorials"
export const update = MAIN_URL+"tutorials"
export const DELETE_COURSE = MAIN_URL+"tutorials"
export const DELETE_ALL_COURSE = MAIN_URL+"tutorials"
export const findCoursesByCategory = MAIN_URL+"tutorials"

// enrollment url
export const ENROLL = MAIN_URL+'enroll'