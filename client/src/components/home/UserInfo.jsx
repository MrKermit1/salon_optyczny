var UserInfo = (function () {
    let email = "";
    let id = 0;
    let portfel = 0;
    let isLog = false;

    var getEmail = function () {
        return email;
    }

    var setEmail = function (x) {
        email = x;
    }

    var getId = function () {
        return id;
    }

    var setId = function (x) {
        id = x;
    }

    var getPortfel = function () {
        return portfel;
    }

    var setPortfel = function (x) {
        portfel = x;
    }

    var setIsLog = function (x) {
        isLog = x;
    }

    var getIsLog = function () {
        return isLog;
    }

    return {
        getEmail: getEmail,
        getId: getId,
        getPortfel: getPortfel,
        setEmail: setEmail,
        setId: setId,
        setPortfel: setPortfel,
        setIsLog: setIsLog,
        getIsLog: getIsLog
    }
})();
export default UserInfo;