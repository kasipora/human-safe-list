const QRCode = require('qrcode');
const { jsPDF } = require('jspdf');

/**
 * Generate a QR code image from text.
 * @param {string} text - The text to encode in the QR code.
 * @returns {Promise<string>} - A promise that resolves to the QR code image data URL.
 */
function generateQRCode(text) {
    return QRCode.toDataURL(text);
}

/**
 * Create a PDF certificate with the given title and recipient name.
 * @param {string} title - The title of the certificate.
 * @param {string} recipient - The name of the recipient.
 * @returns {jsPDF} - A jsPDF document object.
 */
function createCertificate(title, recipient) {
    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.text(title, 105, 50, { align: 'center' });
    doc.setFontSize(16);
    doc.text(`This certificate is awarded to`, 105, 60, { align: 'center' });
    doc.text(recipient, 105, 70, { align: 'center' });
    return doc;
}

module.exports = { generateQRCode, createCertificate };