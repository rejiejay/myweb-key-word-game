var routing = {
    routeList: [],

    init: function init() {
        this.routeList = document.body.children;
    },

    navigation: function navigation(param) {
        var routeList = this.routeList;
        for(var i = 0; i < routeList.length; i++) {
            if (routeList[i].id === param) {
                routeList[i].style.display = 'block';
            } else {
                routeList[i].style.display = 'none';
            }
        }
    }
}
