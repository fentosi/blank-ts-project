export const mockTrim = jest.fn((value) => {
    return value;
});


const mockUtil = jest.fn().mockImplementation(() => {
    return {
        trim: mockTrim
    }
});

export default mockUtil;