export const PdfForm = () => {
  return (
    <form className="form" onSubmit={() => console.log('Bruh')}>
      <button className="form__submit-button">Vytvořit PDF</button>
    </form>
  );
};
