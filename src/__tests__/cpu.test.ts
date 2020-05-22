import {Opcodes} from './../Opcodes';
import Cpu from './../Cpu';

describe('cpu', () => {

    it(`should set carry flag for ${Opcodes.SEC}`, () => {
        const cpu = new Cpu();

        cpu.executeOpcode(0x38);

        expect(cpu.carryFlag).toEqual(true);
    });

    it(`should set clear carry flag for ${Opcodes.CLC}`, () => {
        const cpu = new Cpu();

        cpu.executeOpcode(0x18);

        expect(cpu.carryFlag).toEqual(false);
    });
});