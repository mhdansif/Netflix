const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-6 mt-8 border-t border-gray-300">
      <div className="flex flex-col items-center gap-3">
        <p className="text-gray-600 text-sm">
          MOHAMED ANSIF &copy; {year}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
