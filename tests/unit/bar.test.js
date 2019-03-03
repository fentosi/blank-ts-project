import Bar from '../../src/scripts/components/bar';
import mockUtil, {mockTrim} from '../../src/scripts/utils/util';

jest.mock('../../src/scripts/utils/util');

const barInstance = new Bar(mockUtil);

describe('Bar class', () => {

    beforeEach(() => {
        mockUtil.mockClear();
        mockUtil.trim = mockTrim;
    })
    
    test('given text then calling logValue calls console.log with correct value', () => {
        const text = "some text";

        console.log = jest.fn();

        barInstance.logValue(text);

        expect(console.log).toHaveBeenCalledWith(text);
    });

    test('given text then calling logValue calls trimValue with correct value', () => {
        const text = "some text";

        barInstance.trimValue = jest.fn();

        barInstance.logValue(text);

        expect(barInstance.trimValue).toHaveBeenCalledWith(text);
    });
});