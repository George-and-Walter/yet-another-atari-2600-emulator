import Cpu from './../Cpu';
import { Opcodes } from '../Opcodes';

describe('cpu', () => {

    it(`should set carry flag for ${Opcodes.SEC}`, () => {
        const cpu = new Cpu();

        cpu.executeOpcode(0x38);

        expect(cpu.carryFlag).toEqual(true);
    });

    it(`should clear carry flag for ${Opcodes.CLC}`, () => {
        const cpu = new Cpu();

        cpu.executeOpcode(0x38);
        expect(cpu.carryFlag).toEqual(true);

        cpu.executeOpcode(0x18);
        expect(cpu.carryFlag).toEqual(false);
    });

    it('should initialize correctly when it starts', () => {
        const cpu = new Cpu();

        expect(cpu.Accumulator).toEqual(0);
        expect(cpu.carryFlag).toEqual(false);
    });

    it(`should not clear a set carry flag when instruction that does not affect it is executed`, () => {
        const cpu = new Cpu();
        const carryOpcode = 0x38;

        cpu.executeOpcode(carryOpcode);

        const memoryAddressOperand = 0x44;
        // STA
        cpu.executeOpcode(0x85, memoryAddressOperand);

        expect(cpu.carryFlag).toEqual(true);
    });

    it(`should set memory address to value in accumulator for zeropage: ${Opcodes.STA_ZEROPAGE}`, () => {
        const cpu = new Cpu();
        const memoryAddressOperand = 0x44;
        const accumulatorValue = 0b01001111;
        cpu.Accumulator = accumulatorValue;

        cpu.executeOpcode(0x85, memoryAddressOperand);
        expect(cpu.Memory[memoryAddressOperand]).toEqual(accumulatorValue);
    });

    it(`should set memory address to value in accumulator + register X for zeropage,X: ${Opcodes.STA_ZEROPAGE_X}`, () => {
        const cpu = new Cpu();
        const memoryAddressOperand = 0x0F;
        const registerXValue = 0x80;
        const accumulatorValue = 0b01001111;
        cpu.Accumulator = accumulatorValue;
        cpu.RegisterX = registerXValue;

        cpu.executeOpcode(0x95, memoryAddressOperand);
        expect(cpu.Memory[0x8F]).toEqual(accumulatorValue);
    });

});