const STA_ZEROPAGE = 0x85;

export default class Cpu {
    public carryFlag = false;
    public Memory = new Uint8Array(256);
    public Accumulator = 7;

    executeOpcode(opcode: number, operand?: number) {
        if (opcode === 0x38) {
            this.execute_sec();
        } else if (opcode === STA_ZEROPAGE) {
            this.execute_sta(operand!);
        } else if (opcode === 0x18) {
            this.execute_clc();
        }
    }

    private execute_clc() {
        this.carryFlag = false;
    }

    private execute_sec() {
        this.carryFlag = true;
    }

    private execute_sta(operand: number) {
        this.Memory[operand] = this.Accumulator;
    }
}
