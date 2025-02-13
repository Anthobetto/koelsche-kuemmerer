const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contactStatus: null
        },
        actions: {
            sendContactForm: async (data) => {
                const response = await fetch("https://koelsche-kuemmerer.koeln/api/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });

                setStore({ contactStatus: response.ok ? "success" : "error" });
            }
        }
    };
};
export default getState;