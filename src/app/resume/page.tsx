"use client"
import PDFViewer from '@/components/PDFViewer';
import PDFJSBackend from '@/backends/pdfjs';
import {useEffect, useState} from "react";
import {DARK_THEME, LIGHT_THEME} from "../../../theme";


export default function Resume() {
    const [theme, setTheme] = useState<"light" | "dark">("dark");
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const activeTheme = theme === "light" ? LIGHT_THEME : DARK_THEME;

    const [documentMounted, setDocumentMounted] = useState(false);
    // run after document mounted
    useEffect(() => {
        setDocumentMounted(true);
    }, []);

    if (documentMounted) {
        const body = document.querySelector("body");
        if (body) {
            body.style.backgroundColor = activeTheme.colors.background.regular;
            body.style.color = activeTheme.colors.text.regular;
        }
    }

    return (
        <PDFViewer
            backend={PDFJSBackend}
            src='/Shikhar_Gupta_resume.pdf'
        />
    );
}