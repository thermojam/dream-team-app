const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card/80 border-t mt-auto">
      <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
        <p>&copy; {currentYear} Dream team. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
