function Calculator() {
    this.display = document.querySelector('.display');
    
    this.start = () => {
        this.clickCapture();
    }

    this.clickCapture = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;

            if(el.classList.contains('btnNum')) {
                this.addNumDisplay(el);
            }

            if(el.classList.contains('btnClear')) {
                this.btnClear();
            }

            if(el.classList.contains('btnDel')) {
                this.btnDel();
            }

            if(el.classList.contains('btnEqual')) {
                this.btnEqual();
            }
        })
    }

    this.addNumDisplay = (x) => {
        this.display.value += x.value;
    };

     this.btnClear = () => {
        this.display.value = '';
     }

     this.btnDel = () => {
        this.display.value = this.display.value.slice(0, -1);
     }

     this.btnEqual = () => {
         let account = this.display.value;
        try {
            account = eval(account);

            if(!account) {
                alert('invalid account');
            }
            
            this.display.value = account;
            return
        } catch(e) {
            alert('invalid account')
            return;
        }
     }
}

const calc = new Calculator();
calc.start();
