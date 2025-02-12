const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contactStatus: null  // Estado del envío del formulario
        },
        actions: {
            sendContactForm: async (data) => {
                const response = await fetch("http://localhost:5000/api/contact", {
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