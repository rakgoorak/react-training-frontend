import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const ip = API_URL + "/api";

export const GET = (path) => {
    return new Promise((resolve, reject) => {
        fetch(ip + path, {
            method: "GET",
            headers: {
                authorization: `Bearer ${window.localStorage.getItem("token_Login")}`,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status === 401) {
                    // หาก Unauthorized ให้เปลี่ยนเส้นทางไปที่ /login
                    window.localStorage.removeItem("token_Login"); // ลบ token
                    window.location.replace("/");
                }
                return response.json();
            })
            .then((json) => resolve(json))
            .catch((err) => reject(err));
    });
};

export const POST = (path, obj, formData) => {
    let lang = "th";
    return new Promise((resolve, reject) => {
        fetch(ip + path, {
            method: "POST",
            headers: formData
                ? {
                    authorization: `Bearer ${window.localStorage.getItem("token_Login")}`,
                }
                : {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${window.localStorage.getItem("token_Login")}`,
                },
            body: formData ? formData : JSON.stringify({ ...obj, lang }),
        })
            .then((response) => {
                if (response.status === 401) {
                    window.localStorage.removeItem("token_Login");
                    window.location.replace("/");
                }
                return response.json();
            })
            .then((json) => resolve(json))
            .catch((err) => reject(err));
    });
};

export const SENDDATA = "/message"
export const CALLPROVINCES = "/callprovinces"