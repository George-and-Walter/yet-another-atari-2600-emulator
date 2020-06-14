import { Opcodes } from "./Opcodes";

export default class Cpu {
    public carryFlag = false;
    public Memory = new Uint8Array(256);
    public Accumulator = 0;
    public RegisterX = 0;

    executeOpcode(opcode: number, operand?: number) {
        if (opcode === Opcodes.SEC) {
            this.execute_sec();
        } else if (opcode === Opcodes.STA_ZEROPAGE) {
            this.execute_sta_zeropage(operand!);
        } else if (opcode === Opcodes.CLC) {
            this.execute_clc();
        } else if (opcode === Opcodes.STA_ZEROPAGE_X) {
            this.execute_sta_zeropage_x(operand!);
        }
    }

    private execute_clc() {
        this.carryFlag = false;
    }

    private execute_sec() {
        this.carryFlag = true;
    }

    private execute_sta_zeropage(operand: number) {
        this.Memory[operand] = this.Accumulator;
    }

    private execute_sta_zeropage_x(operand: number) {
        let memLocation = operand + this.RegisterX;
        this.Memory[memLocation] = this.Accumulator;
    }
}
