import { useEffect, useRef } from "react"

export default function PDFViewer(props) {

    const viewerRef = useRef(null)
    const backend = useRef(new props.backend())

    useEffect(() => {
        backend.current.init(props.src, viewerRef.current)
    }, [])

    return (
        <div ref={viewerRef} id='viewer' style={{ width: '100%', height: '100%'}}>

        </div>
    )
}