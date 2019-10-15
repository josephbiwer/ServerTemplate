let state = {
    innerState: 'application',
    onChange: () => {},
    set active(value) {
        this.innerState = value;
        if(this.onChange)
            this.onChange(this.innerState);           // Call onChange event when value is set
    },
    get active() {
        return this.innerState;
    },
    set subscribe(fn) {
        this.onChange = fn;
        this.onChange(this.innerState);
    }
}