const saveDocument = async (point, document) => {
    try {
        const response = await fetch("http://localhost:5000/" + point, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(document)
        })
        if (response.ok) {
            return response.json();
        }
        return response;

    } catch (error) {
        console.log(error)
    }
}

const sendEmail = async (point, emailDetails) => {
    try {
        const response = await fetch("http://localhost:5000/" + point, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(emailDetails)
        })
        if (response.ok) {
            return response.json();
        }
        return response;

    } catch (error) {
        console.log(error)
    }
}


const deleteDocument = async (point, document) => {
    try {
        const response = await fetch(`http://localhost:5000/${point}/delete`, {
            method: "delete",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(document)
        })
        if (response.ok) {
            return response.json();
        }
        return response;

    } catch (error) {
        console.log(error)
    }
}


const updateDocument = async (point, document) => {
    try {
        const response = await fetch(`http://localhost:5000/${point}/update`, {
            method: "PATCH",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(document)
        })
        if (response.ok) {
            return response.json();
        }
        return response;

    } catch (error) {
        console.log(error)
    }
}

export {
    saveDocument,
    sendEmail,
    updateDocument,
    deleteDocument
}
