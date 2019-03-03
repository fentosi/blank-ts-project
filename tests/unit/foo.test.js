import Foo from '../../src/scripts/components/foo';
import mockUtil, {mockTrim} from '../../src/scripts/utils/util';

jest.mock('../../src/scripts/utils/util');

const fooInstance = new Foo(mockUtil);

describe('Foo class', () => {

    beforeEach(() => {
        mockUtil.mockClear();
        mockUtil.trim = mockTrim;
    })
    
    test('given text then calling trimValue returns valid value', () => {
        const text = "some text";

        let value = fooInstance.trimValue(text);

        expect(value).toEqual(text);
    });

    test('given text then calling trimValue calls util.trim', () => {
        const text = "some text";

        fooInstance.trimValue(text);

        expect(mockTrim).toHaveBeenCalled();
    });

    test('given text then calling trimValue calls util.trim with correct value', () => {
        const text = "some text";

        fooInstance.trimValue(text);

        expect(mockTrim).toHaveBeenCalledWith(text);
    });
});