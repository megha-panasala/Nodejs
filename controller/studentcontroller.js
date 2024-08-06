
exports.index = (req, res) => {
    res.json({
        "status": "success",
        "data": [
            { "id": 1, "name": "megha", "enrollment": 5000023, "DOB": 9 - 8 - 2002, "bloodgroup": "B+", "mobile": 9876785432, "email": "megha@gmail.com", "address": "rajkot" },
            { "id": 2, "name": "shivani", "enrollment": 5000045, "DOB": 1 - 4 - 2003, "bloodgroup": "B+", "mobile": 9876785982, "email": "shivani@gmail.com", "address": "amreli" },
            { "id": 3, "name": "krushi", "enrollment": 5000065, "DOB": 4 - 8 - 2003, "bloodgroup": "o+", "mobile": 9876765432, "email": "krushi@gmail.com", "address": "rajkot" },
            { "id": 4, "name": "vishva", "enrollment": 5000034, "DOB": 9 - 6 - 2002, "bloodgroup": "B+", "mobile": 9843785432, "email": "vishva@gmail.com", "address": "junagdh" },
        ],
        "message": "Retrive successfully"
    })
}

exports.show = (req, res) => {
    const id = req.params.id;
    res.json({
        "status": "success",
        "data": { "id": 1, "name": "megha", "enrollment": 5000023, "DOB": 9 - 8 - 2002, "bloodgroup": "B+", "mobile": 9876785432, "email": "megha@gmail.com", "address": "rajkot" },
        "message": "retrive sucsessfully"
    })
}

exports.store = (req, res) => {
    res.json({
        "status": "success",
        "data": { "id": req.body.id, "name": req.body.name, "enrollment": req.body.enrollment, "DOB": req.body.DOB, "bloodgroup": req.body.bloodgroup, "mobile": req.body.mobile, "email": req.body.email, "address": req.body.address },
        "message": "insert sucsessfully"
    })
}

exports.update = (req, res) => {
    res.json({
        "status": "success",
        "data": { "name": req.body.name, "address": req.body.address },
        "message": "update sucsessfully"
    })
}

exports.destroy = (req, res) => {
    res.json({
        "status": "success",
        "data": { "id": req.body.id },
        "message": "deleted sucsessfully"
    })
}


