export class FilesHelper {

    static downloadByBlob(blob: Blob, type: string, filename: string) {
        const file = new Blob([blob], { type: type });

        const downloadLink = document.createElement('a');
        const url = window.URL.createObjectURL(file);

        downloadLink.href = url;
        downloadLink.download = filename;
        downloadLink.click();

        window.URL.revokeObjectURL(url);
    }

}