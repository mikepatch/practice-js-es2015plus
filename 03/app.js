import { files } from './data.js';

const getFilesSizeSum = () => {
    const filesData = [];
    const filesSizeArr = [];

    const getFileData = () => {
        files.forEach(file => {
            const { size } = file;

            pushFileDataToArr(size);
        });
    }

    const pushFileDataToArr = (size) => filesData.push(size);

    const getFileSizeInBytes = () => {
        filesData.forEach(file => {
            const { length, unit } = file;

            pushFileSizeToArr(changeToBytes(length, unit));
        });
    }

    const pushFileSizeToArr = (sizeInBytes) => filesSizeArr.push(sizeInBytes);

    const getSum = () => filesSizeArr.reduce((acc, fileSize) => acc + fileSize, 0);

    const changeToBytes = (length, unit = 'B') => {

        if (unit === 'KB') {
            return kbToB(length);
        } else if (unit === 'MB') {
            return mbToB(length);
        } else if (unit === 'GB') {
            return gbToB(length);
        } else {
            return length;
        }
    }

    const kbToB = (size) => size * 1024;
    const mbToB = (size) => size * 1024 * 1024;
    const gbToB = (size) => size * 1024 * 1024 * 1024;


    const init = () => {
        getFileData();
        getFileSizeInBytes();
        const sizeInBytes = getSum() + 'B';

        return console.log(sizeInBytes);
    }
    return init();
}

getFilesSizeSum()