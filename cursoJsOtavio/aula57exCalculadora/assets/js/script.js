function calc() {
    return {
        display: document.querySelector('.display'),

        inicia: function() {
            this.btnClick();
        },

        doAccount: function() {
            let account = this.display.value;

            try {
                account = eval(account);

                if(!account) {
                    alert('invalid account')
                    return;
                }

                this.display.value = account;
            }   catch(e) {
                    alert('invalid account');
                    return;
                }
        },

        btnClick: function() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if(el.classList.contains('btnNum')) {   // NUM BUTTON
                    this.btnToDisplay(el.value);
                }

                if(el.classList.contains('btnClear')) {   // CLEAR BUTTON
                    this.display.value = '';
                }

                if(el.classList.contains('btnDel')) {   // DELETE LAST
                    this.display.value = this.display.value.slice(0, -1);
                }

                if(el.classList.contains('btnEqual')) {   // EQUAL
                    this.doAccount();
                }

                document.addEventListener('keydown', (x) => {   // ENTER KEY
                    if(x.key === 'Enter') {
                        this.display.focus();
                        this.doAccount();
                    }
                });
            });
        },

        btnToDisplay: function(x) {
            this.display.value += x;
        }
    }
}

const calculator = calc();
calculator.inicia();
