export default class PDFJs {
    init = (source, element) => {
        const iframe = document.createElement('iframe', );
        iframe.setAttribute("style", "margin-bottom: -10px");
        iframe.src = `/pdfjs-4.0.379-dist/web/viewer.html?file=${source}`;
        iframe.width = '100%';
        iframe.height = '100%';
        if(element.childNodes.length === 0){
            element.appendChild(iframe);

        }
    }
}