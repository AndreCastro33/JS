function calc() {
    return {
        display: document.querySelector('.display'),

        inicia: function() {
            this.btnClick();
        },

        btnClick: function() {
            document.addEventListener('click', function(e){
                const el = e.target;

                if(el.classList.contains('btnNum')) {
                    this.btnToDisplay(el.innerText);
                }
            }.bind(this));
        },

        btnToDisplay: function(x) {
            this.display.value += x;
        }
    }
}

const calculator = calc();
calculator.inicia();
