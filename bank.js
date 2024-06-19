class Bank {
    static getAccountDetails() {
        var accountDetails = {
            1000: { accno: 1000, name: "userone", balance: 50000, password: "user1" },//TO ACCESS THE WHOLE OBJ
            1001: { accno: 1001, name: "usertwo", balance: 80000, password: "user2" },
            1002: { accno: 1002, name: "userthree", balance: 50000, password: "user3" },
            1003: { accno: 1003, name: "userfour", balance: 80000, password: "user4" },
            1004: { accno: 1004, name: "userfive", balance: 50000, password: "user5" },
            1005: { accno: 1005, name: "usersix", balance: 80000, password: "user6" },
        }
        return accountDetails
    }

    static authenticateUser(accno, password) {
        let data = Bank.getAccountDetails();
        if (accno in data) {
            if (password == data[accno]["password"]) {
                return 0//accnt numbr and password exist
            }
            else {
                return 1 //password incorrect
            }
        }
        else {
            return -1//no accnt number
        }
    }


    static login() {
        alert("inside login")
        let accno = document.querySelector("#accn").value;
        let psw = document.querySelector("#ps").value;
        let data = Bank.getAccountDetails();
        if (accno in data) {
            alert("user exist");
            if (psw == data[accno]["password"]) {
                alert("authentication success");
                window.location.href = "userhome.html"
            }
            else {
                alert("invalid password");
            }

        }
        else {
            alert("user doesnt exist");
        }

    }


    static deposit() {
        let accno = document.querySelector("#accn").value;
        let psw = document.querySelector("#ps").value;
        let amount = document.querySelector("#amnt").value;
        let user = Bank.authenticateUser(accno, psw);
        let data = Bank.getAccountDetails();
        if (user == 0) {
            data[accno]["balance"] += Number(amount);
            alert("avail balance" + data[accno]["balance"])
        }
        else if (user == 1) {
            alert("invalid password");
        }
        else {
            alert("invalid accno");
        }
    }


    static withdraw() {
        let accno = document.querySelector("#accn").value;
        let psw = document.querySelector("#ps").value;
        let amount = document.querySelector("#amnt").value;
        let user = Bank.authenticateUser(accno, psw);
        let data = Bank.getAccountDetails();
        if (user == 0) {
            if (amount > data[accno]["balance"]) {
                alert("insufficient balance");
            }
            else {
                data[accno]["balance"] -= Number(amount);
                alert(data[accno]["balance"])
            }
        }
    }
}
