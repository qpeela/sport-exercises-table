export function Api() {
    this.getToken = function () {
        return localStorage.getItem("token-auth");
    };

    this.checkAuth = function () {
        const token = this.getToken();
        return Boolean(token);
    };
}
