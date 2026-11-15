function recursiva(n) {
    console.log(n);
    if(n >= 10) return;
    n++;
    recursiva(n);
}

recursiva(-1);
