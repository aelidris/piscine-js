function mult2(nb1){
    return function (nb2) {
        return nb1*nb2;
    }
}
function add3(nb1){
    return function (nb2){
        return function (nb3) {
            return nb1+nb2+nb3;
        }
    }
}
function sub4(nb1){
    return function (nb2){
        return function (nb3) {
            return function (nb4){
                return nb1-nb2-nb3-nb4;
            }
        }
    }
}