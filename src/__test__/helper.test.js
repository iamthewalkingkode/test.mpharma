import { getStorage, getStorageJson, setStorage, setStorageJson, delStorage } from '../helper';

test('should get string data from local storage that was already set', () => {
    setStorage('string', 'mPharma');
    expect(getStorage('string')).toEqual('mPharma');
});

test('should get array/object data from local storage that was already set', () => {
    setStorageJson('object', { id: 1 });
    expect(getStorageJson('object')).toEqual({ id: 1 });
});

test('should delete data from local storage', () => {
    setStorage('string', 'mPharma');
    delStorage('string');
    expect(getStorage('string')).toEqual('');
});