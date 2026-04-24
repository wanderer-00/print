modelViewer.addEventListener('progress', (event) => {
    // totalProgress — это общее количество байт
    const totalBytes = event.detail.totalProgress;
    if (totalBytes > 0) {
        const mb = (totalBytes / (1024 * 1024)).toFixed(2);
        console.log(`Финальный вес: ${mb} MB`);
    }
});
