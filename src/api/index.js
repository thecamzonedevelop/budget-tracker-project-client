import requst from "./requst";

export default {
    getall(param){
        return requst("/budget/total-money", "get", param);
    },
    listAll(page,size){
        return requst(`/budget/report?page=${page||0}&size=${size||5}`, "get");
    },
    getCategory(param){
        return requst(`/categories?type=${param}`, "get");
    },
    getAllIncome(){
        return requst(`/incomes?page=${page||0}&size=${size||5}`, "get");
    },
    getAllExpense(){
        return requst(`/expenses?page=${page||0}&size=${size||5}`, "get");
    },
    getTotalIncome(){
        return requst(`/incomes/total`, "get");
    },
    getTotalExpense(){
        return requst(`/expenses/total`, "get");
    },
    addIncome(param){
        return requst("/incomes", "post", param);
    },
    addExpense(param){
        return requst("/expenses", "post", param);
    },
    deleteIncome(param){
        return requst(`/incomes/delete?id=${param}`, "delete");
    },
    deleteExpense(param){
        return requst(`/expenses/delete?id=${param}`, "delete");
    },
    updateIncome(param){
        return requst(`/incomes/${param.id}`, "put", param);
    },
    updateExpense(param){
        return requst(`/expenses/${param.id}`, "put", param);
    },
    
}