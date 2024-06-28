import requst from "./requst";

export default {
    getall(param){
        return requst("/budget/total-money", "get", param);
    },
    listAll(page,size){
        return requst(`/budget/report?page=${page||0}&size=${size||5}`, "get");
    }
}