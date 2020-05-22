export default class Cpu {
    public carryFlag = false

    executeOpcode(opcode: number) {
        this.execute_clc();

        if (opcode === 0x38) {
            this.execute_sec();
        }
    }

    private execute_clc() {
        this.carryFlag = false;
    }

    private execute_sec() {
        this.carryFlag = true;
    }
}
