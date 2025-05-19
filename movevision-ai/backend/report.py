from fpdf import FPDF

def generate_pdf(object_counts, kunde_type):
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Arial", size=12)
    pdf.cell(200, 10, f"Flyttebefaring ({kunde_type})", ln=True)

    pdf.ln(5)
    for obj, count in object_counts.items():
        pdf.cell(200, 10, f"{count} stk {obj}", ln=True)

    pdf_path = "rapport.pdf"
    pdf.output(pdf_path)
    return pdf_path

