

import instance from "./auth";

export const getAllContacts = ()=> instance.get("/contacts");

export const deleteContacts = id => {
    return instance.delete(`/contacts/${id}`)
}

export const addContacts = data => {
    return instance.post("/contacts", data);
}








