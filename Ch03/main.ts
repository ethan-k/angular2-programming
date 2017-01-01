class Animal {
    protected constructor(public name: string, public leg: number) {

    }

    getLeg(): number {
        return this.leg; 
    }

    protected getName(): string {
        return this.name;
    }
}