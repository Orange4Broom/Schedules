import { useCallback } from 'react';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import logo from '@assets/logo.png';

interface PdfProps {
    teamCount: number;
    playstyleType: number;
    playRules: number | null;
    showInNewTab: boolean; // New prop to control behavior
}

export const useCreatePdf = ({
    teamCount,
    playstyleType,
    playRules,
    showInNewTab,
}: PdfProps) => {
    const createPdf = useCallback(async () => {
        // Create a new PDFDocument
        const pdfDoc = await PDFDocument.create();

        // Add a blank page to the document
        const page = pdfDoc.addPage([400, 600]);

        // Set the font
        const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

        // Embed the logo image
        const logoImageBytes = await fetch(logo).then((res) => res.arrayBuffer());
        const logoImage = await pdfDoc.embedPng(logoImageBytes);

        // Get the dimensions of the logo image
        const logoDims = logoImage.scale(0.4);

        // Draw the logo image at the top center of the page
        page.drawImage(logoImage, {
            x: (page.getWidth() - logoDims.width) / 2,
            y: page.getHeight() - logoDims.height - 20,
            width: logoDims.width,
            height: logoDims.height,
        });

        // Draw the team count
        page.drawText(`Team Count: ${teamCount}`, {
            x: 50,
            y: 350,
            size: 20,
            font,
            color: rgb(0, 0, 0),
        });

        // Draw the playstyle type
        page.drawText(`Playstyle Type: ${playstyleType}`, {
            x: 50,
            y: 300,
            size: 20,
            font,
            color: rgb(0, 0, 0),
        });

        // Draw the play rules
        page.drawText(`Play Rules: ${playRules}`, {
            x: 50,
            y: 250,
            size: 20,
            font,
            color: rgb(0, 0, 0),
        });

        // Serialize the PDFDocument to bytes (a Uint8Array)
        const pdfBytes = await pdfDoc.save();

        // Create a Blob from the PDF bytes
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });

        // Create a URL for the Blob
        const url = URL.createObjectURL(blob);

        if (showInNewTab) {
            // Open the PDF in a new tab
            const newTab = window.open(url, '_blank');
            if (newTab) {
                newTab.focus();
            } else {
                // Fallback to download if opening a new tab fails
                const downloadLink = document.createElement('a');
                downloadLink.href = url;
                downloadLink.download = 'document.pdf';
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
            }
        } else {
            // Directly download the PDF
            const downloadLink = document.createElement('a');
            downloadLink.href = url;
            downloadLink.download = 'document.pdf';
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        }
    }, [teamCount, playstyleType, playRules, showInNewTab]);

    return createPdf;
};
