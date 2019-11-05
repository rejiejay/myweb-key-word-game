var introduction = {
    DOM: null,

    init: function init() {
        this.DOM = document.getElementById('introduction');

        document.getElementById('introduction-start').onclick = function () {
            routing.navigation('connecting');
        }
    }
}
