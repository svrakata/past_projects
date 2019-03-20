const date = {
    currentDate() {
        this.date = new Date();
        this.day = this.date.getDate();
        this.month = this.date.getMonth() + 1;
        this.year = this.date.getFullYear();
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.seconds = this.date.getSeconds();

        if (this.day < 10) {
            this.day = `0${this.day}`;
        }
        if (this.month < 10) {
            this.month = `0${this.month}`;
        }
        if (this.hours < 10) {
            this.hours = `0${this.hours}`;
        }
        if (this.minutes < 10) {
            this.minutes = `0${this.minutes}`;
        }
        if (this.seconds < 10) {
            this.seconds = `0${this.seconds}`;
        }

        return (`${this.year}-${this.month}-${this.day} at ${this.hours}:${this.minutes}:${this.seconds}`);
    },
};

export default date;
